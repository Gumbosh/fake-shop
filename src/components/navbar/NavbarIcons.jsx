import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setActiveDropdown } from "../../features/dropdownSlice";

const NavbarIcons = () => {
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const setActiveDropdownHandler = (element) => () => {
    dispatch(setActiveDropdown(element));
  };

  return (
    <>
      <li
        className="cursor-pointer"
        onClick={setActiveDropdownHandler(
          activeDropdown === "search" ? null : "search"
        )}
      >
        <CiSearch />
      </li>
      <li
        className="flex gap-1 cursor-pointer"
        onClick={setActiveDropdownHandler(
          activeDropdown === "cart" ? null : "cart"
        )}
      >
        <CiShoppingCart />
        <span className="text-xs">{cartTotalQuantity}</span>
      </li>
      <li
        className="hidden lg:block cursor-pointer"
        onClick={setActiveDropdownHandler(
          activeDropdown === "menu" ? null : "menu"
        )}
      >
        <CiMenuBurger />
      </li>
    </>
  );
};

export default NavbarIcons;
