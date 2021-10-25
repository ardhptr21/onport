import { useState } from "react";
import SquareLogo from "../assets/image/SquareLogo.svg";
import UserDropdown from "./UserDropdown";

const UserNav = ({ photo, name }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div
      className="md:flex justify-center items-center gap-2 relative cursor-pointer select-none hidden"
      onClick={() => setIsDropdown(!isDropdown)}
    >
      <img src={photo || SquareLogo} className="w-10 rounded-full border-2 border-primary" alt={name} />
      <p className="text-primary font-bold">{name}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>

      <UserDropdown on={isDropdown} />
    </div>
  );
};

export default UserNav;
