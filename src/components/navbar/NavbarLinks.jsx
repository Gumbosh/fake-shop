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
      <li>
        <Link to="/products/men" onClick={closeDropdownHandler}>
          MEN
        </Link>
      </li>
      <li>
        <Link to="/products/women" onClick={closeDropdownHandler}>
          WOMEN
        </Link>
      </li>
      <li>
        <Link to="/products/jewelery" onClick={closeDropdownHandler}>
          JEWELERY
        </Link>
      </li>
      <li>
        <Link to="/products/electronics" onClick={closeDropdownHandler}>
          ELECTRONICS
        </Link>
      </li>
    </>
  );
};

export default NavbarLinks;
