import { useSelector } from "react-redux";
import DropdownSearch from "./DropdownSearch";
import DropdownCart from "./DropdownCart";
import DropdownMenu from "./DropdownMenu";

const NavbarDropdown = () => {
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);
  return (
    <>
      {activeDropdown === "search" && <DropdownSearch />}
      {activeDropdown === "cart" && <DropdownCart />}
      {activeDropdown === "menu" && <DropdownMenu />}
    </>
  );
};

export default NavbarDropdown;
