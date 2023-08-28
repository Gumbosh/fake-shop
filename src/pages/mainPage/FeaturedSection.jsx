import { Link } from "react-router-dom";

const FeaturedSection = ({ linkTo, children }) => {
  return (
    <>
      <Link to={linkTo}>
        <header className="text-center bg-gradient-to-t from-custom_pale_dogwood to-custom_pale_dogwood py-8 px-2.5 mb-5">
          {children}
        </header>
      </Link>
    </>
  );
};

export default FeaturedSection;
