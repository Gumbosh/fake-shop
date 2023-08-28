import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearActiveDropdown } from "../features/dropdownSlice";

/*
 * RouteChangeHandler scrolls the page to the top when the route changes.
 * It also ensures that any active dropdown menu is closed.
 */

const RouteChangeHandler = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);

  useEffect(() => {
    const handleScrollToTop = () => {
      if (activeDropdown) {
        dispatch(clearActiveDropdown());
      }
      window.scrollTo(0, 0);
    };

    handleScrollToTop();

    window.addEventListener("popstate", handleScrollToTop);

    return () => {
      window.removeEventListener("popstate", handleScrollToTop);
    };
  }, [dispatch, pathname]);

  return null;
};

export default RouteChangeHandler;
