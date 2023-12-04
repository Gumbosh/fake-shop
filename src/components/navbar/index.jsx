import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import NavbarDropdown from "../navbarDropdown";
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-12 bg-custom_linen">
      <section className="flex items-center h-full max-w-5xl m-auto">
        <section className="mx-5">
          {/* Page logo linked to the main page. */}
          <NavbarLogo />
        </section>
        <ul className="lg:hidden ml-5 flex gap-10 items-center text-sm">
          {/* Links to subpages. */}
          <NavbarLinks />
        </ul>
        <ul className="ml-auto mr-5 flex items-center gap-2.5">
          {/* Icons that render dropdown content on click. */}
          <NavbarIcons />
        </ul>
      </section>
      {/* Dropdown content rendered conditionally. */}
      <NavbarDropdown />
    </nav>
  );
};

export default Navbar;
