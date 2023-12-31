import PageContent from "../../layout/PageLayout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const results = useSelector((state) => state.search.results);
  return (
    <PageContent>
      <h2 className="mb-5 text-3xl font-bold">Search Results:</h2>
      {results.length > 0 ? (
        <ul className="flex flex-col gap-2.5 mt-5 md:text-lg">
          {results.map((item) => (
            <li key={item.id}>
              <Link to={`/product/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="text-xl">No results</h3>
      )}
    </PageContent>
  );
};

export default SearchPage;
