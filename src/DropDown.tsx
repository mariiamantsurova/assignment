import { useAuth, useAuthActions } from "@frontegg/react";

interface DropDownProps {
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDropdownOpen: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  setIsDropdownOpen,
  isDropdownOpen,
}) => {
  const { user } = useAuth();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const { switchTenant } = useAuthActions();

  const handleSwitchTenant = async (tenantId: string) => {
    try {
      await switchTenant({
        tenantId,
      });
      console.log("Switched tenant successfully");
    } catch (error) {
      console.error("Error switching tenant", error);
    }
  };

  return (
    <div>
      <button
        className="  px-4 w-full py-2 flex items-center justify-between  rounded border border-[#828FA340] hover:border-primary cursor-pointer relative "
        onClick={toggleDropdown}
      >
        <span>Switch account</span>
        {isDropdownOpen && (
          <div className="absolute bottom-full translate-x-9  left-full translate-y-full rounded bg-[#20212c] w-max">
            <ul className="flex flex-col p-2">
              {user?.tenants.map((tenant: any, index: any) => (
                <li
                  key={tenant.tenantId}
                  onClick={() => handleSwitchTenant(tenant.tenantId)}
                >
                  <span
                    style={
                      tenant.tenantId == user?.tenantId
                        ? { color: "#7209B7" }
                        : { color: "white" }
                    }
                  >
                    Account {index + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </div>
  );
};

export default DropDown;
