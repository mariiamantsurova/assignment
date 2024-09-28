import { AdminPortal, useAuth } from "@frontegg/react";
import { useState } from "react";
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    AdminPortal.show();
  };

  return (
    <div className="profile-card card">
      <img
        src={user?.profilePictureUrl ?? ""}
        alt={user?.name}
        className="profile-image"
      />
      <h2>{user?.name}</h2>

      <div className="drop-down">
        <DropDown
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        ></DropDown>
      </div>
      <div className="buttons">
        <button onClick={() => navigate("/account/logout")}>
          Click to logout
        </button>
        <button onClick={handleClick}>Settings</button>
      </div>
    </div>
  );
}

export default Profile;
