import { AdminPortal, ContextHolder, useAuth } from "@frontegg/react";
import { useState } from "react";
import DropDown from "./DropDown";

function Profile() {
  const { user } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    console.log(user?.accessToken);
    console.log(user?.sid);
    AdminPortal.show();
  };

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
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
        <button onClick={() => logout()}>Click to logout</button>
        <button onClick={handleClick}>Settings</button>
      </div>
    </div>
  );
}

export default Profile;
