import { Link } from "react-router-dom";
import { clearActiveDropdown } from "../../features/dropdownSlice";
import { useSelector, useDispatch } from "react-redux";

const NavbarLogo = () => {
  const dispatch = useDispatch();
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);

  const closeDropdownHandler = () => {
    if (activeDropdown) {
      dispatch(clearActiveDropdown());
    }
  };

  return (
    <>
      <Link to="/" onClick={closeDropdownHandler}>
        <h1 className="text-sm">
          <b className="text-custom_important_text">Fake</b>Shop
        </h1>
      </Link>
    </>
  );
};

export default NavbarLogo;
