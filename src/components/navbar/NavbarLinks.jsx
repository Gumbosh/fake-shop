import { Link } from "react-router-dom";
import { clearActiveDropdown } from "../../features/dropdownSlice";
import { useSelector, useDispatch } from "react-redux";

const NavbarLinks = () => {
  const dispatch = useDispatch();
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);

  const closeDropdownHandler = () => {
    if (activeDropdown) {
      dispatch(clearActiveDropdown());
    }
  };

  return (
    <>
      <Link to="/products/men" onClick={closeDropdownHandler}>
        <li>MEN</li>
      </Link>
      <Link to="/products/women" onClick={closeDropdownHandler}>
        <li>WOMEN</li>
      </Link>
      <Link to="/products/jewelery" onClick={closeDropdownHandler}>
        <li>JEWELERY</li>
      </Link>
      <Link to="/products/electronics" onClick={closeDropdownHandler}>
        <li>ELECTRONICS</li>
      </Link>
    </>
  );
};

export default NavbarLinks;
