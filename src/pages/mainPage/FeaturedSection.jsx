import { Link } from "react-router-dom";

const FeaturedSection = ({ linkTo, children }) => {
  return (
    <>
      <Link to={linkTo}>
        <header className="text-center bg-custom_pale_dogwood py-8 px-2.5 mb-5">
          {children}
        </header>
      </Link>
    </>
  );
};

export default FeaturedSection;
