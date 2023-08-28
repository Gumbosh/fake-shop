import { clearActiveDropdown } from "../../features/dropdownSlice";
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";

const DropdownTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);

  const closeDropdownHandler = () => {
    if (activeDropdown) {
      dispatch(clearActiveDropdown());
    }
  };

  return (
    <>
      <section className="max-w-5xl m-auto min-h-[300px] bg-custom_linen px-5 py-5 relative">
        <button
          className="absolute top-0 right-0 mr-5 mt-5"
          onClick={closeDropdownHandler}
        >
          <CiCircleRemove className="text-[28px]" />
        </button>
        {children}
      </section>
      <section
        className="fixed left-0 h-screen w-screen bg-custom_timberwolf opacity-70"
        onClick={closeDropdownHandler}
      />
    </>
  );
};

export default DropdownTemplate;
