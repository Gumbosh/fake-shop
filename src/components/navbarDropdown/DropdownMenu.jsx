import NavbarLinks from "../navbar/NavbarLinks";
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import { clearActiveDropdown } from "../../features/dropdownSlice";

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);

  const closeDropdownHandler = () => {
    if (activeDropdown) {
      dispatch(clearActiveDropdown());
    }
  };

  return (
    <section className="fixed top-12 left-0 pt-5 w-screen h-screen bg-custom_linen">
      <button
        className="absolute top-0 right-0 mr-5 mt-5"
        onClick={closeDropdownHandler}
      >
        <CiCircleRemove className="text-[28px]" />
      </button>
      <ul className="flex flex-col items-center pt-10 gap-10 text-custom_important_text">
        <NavbarLinks />
      </ul>
    </section>
  );
};

export default DropdownMenu;
