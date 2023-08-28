import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { setQuery, setResults } from "../../features/searchSlice";
import { clearActiveDropdown } from "../../features/dropdownSlice";
import axios from "axios";
import debounce from "lodash/debounce";
import DropdownTemplate from "./DropdownTemplate";

const DropdownSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);
  const activeDropdown = useSelector((state) => state.dropdown.activeDropdown);

  const closeDropdownHandler = () => {
    if (activeDropdown) {
      dispatch(clearActiveDropdown());
    }
  };

  useEffect(() => {
    setInputValue("");
    dispatch(setQuery(""));
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    dispatch(setQuery(newInputValue));
    debouncedSearch(newInputValue);
  };

  const debouncedSearch = debounce(async (newQuery) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?title=${newQuery}`
      );
      const relatedResults = response.data.filter((item) =>
        item.title.toLowerCase().includes(newQuery.toLowerCase())
      );

      dispatch(setResults(relatedResults));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 300);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      closeDropdownHandler;
      navigate("/search");
    }
  };

  return (
    <DropdownTemplate>
      <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
        <label htmlFor="search">
          <CiSearch className="text-[28px] text-custom_important_text" />
        </label>
        <input
          type="text"
          id="search"
          name="search"
          autoComplete="off"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search"
          className="bg-custom_linen placeholder-custom_placeholder_text focus:outline-none text-custom_important_text"
          ref={inputRef}
        />
      </form>
      <ul className="flex flex-col gap-2.5 mt-5 md:text-sm">
        {inputValue.trim() !== "" &&
          results.slice(0, 3).map((item) => (
            <li key={item.id} className="text-custom_important_text">
              <Link to={`/product/${item.id}`} onClick={closeDropdownHandler}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </DropdownTemplate>
  );
};

export default DropdownSearch;
