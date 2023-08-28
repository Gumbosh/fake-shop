import PageLayout from "../../layout/PageLayout";
import FeaturedSection from "./FeaturedSection";
import DualImageSection from "./DualImageSection";
import ImageCard from "./ImageCard";
import BestItemsSection from "./BestItemsSection";
import NewsletterSection from "./NewsletterSection";
import manImage from "../../assets/images/man-1.jpg";
import womanImage from "../../assets/images/woman-1.jpg";
import jeweleryFirstImage from "../../assets/images/jewelery-1.jpg";
import jewelerySecondImage from "../../assets/images/jewelery-2.jpg";
import electronicsFirstImage from "../../assets/images/electronics-1.jpg";
import electronicsSecondImage from "../../assets/images/electronics-2.jpg";

const MainPage = () => {
  return (
    <PageLayout>
      {/* <FeaturedSection/> - Header Section with a customizable link (linkTo prop) and content in tag. */}
      <FeaturedSection linkTo={"/products/electronics"}>
        <h2 className="flex flex-col italic text-custom_important_text items-center">
          <span className="text-lg">Discover a Digital Revolution</span>
          <span className="font-bold text-xl ">Electronics Now Live</span>
        </h2>
      </FeaturedSection>
      {/* <DualImageSection/> holds two <ImageCard/> components. */}
      <DualImageSection>
        {/* <ImageCard/> has a title and description based on provided values (title, description props).
         Additionally, there is an image with alt text (image, alt props) and a button (<ShopNowButton/> from global components folder) linked to the provided (linkTo prop) subpage. */}
        <ImageCard
          linkTo={"/products/men"}
          image={manImage}
          alt={"Male model standing by the wall"}
          title={"Fresh & Trendy Men's Collection"}
          description={"Explore our exquisite collection of men's fashion"}
        />
        <ImageCard
          linkTo={"/products/women"}
          image={womanImage}
          alt={"Female model sitting on stairs"}
          title={"Charming Women's Fashion Collection"}
          description={"Discover our enchanting collection of women's fashion"}
        />
      </DualImageSection>
      {/* The <BestItemsSection/> features a title and description based on provided values (title, description props).
      This section retrieves products from the API based on the provided category (category prop).
      It sorts them by rating to display the top 4 products.
      Each product is linked to the "/products/:id" subpage, rendered from <ProductDetails/>.
      Beneath the items, there's a button (<ShopNowButton/> from global components folder) linked to the provided destination (linkTo prop). */}
      <BestItemsSection
        title={"Step Into the Future"}
        description={
          "Refresh Your Wardrobe with the Latest Men's Fashion Trends"
        }
        linkTo={"/products/men"}
        category={"men's clothing"}
      />
      <DualImageSection>
        <ImageCard
          linkTo={"/products/jewelery"}
          image={jeweleryFirstImage}
          alt={"Gold necklaces on the mirror"}
          title={"Glimmering Treasures"}
          description={"Elevate your style with our gleaming collection"}
        />
        <ImageCard
          linkTo={"/products/jewelery"}
          image={jewelerySecondImage}
          alt={"Gold necklace in a shell"}
          title={"All Eyes on You"}
          description={"Turn heads with our statement pieces"}
        />
      </DualImageSection>
      <BestItemsSection
        title={"Embrace the New Era"}
        description={
          "Elevate Your Style with the Hottest Women's Fashion Trends"
        }
        linkTo={"/products/women"}
        category={"women's clothing"}
      />
      <DualImageSection>
        <ImageCard
          linkTo={"/products/electronics"}
          image={electronicsFirstImage}
          alt={"Female model with camera"}
          title={"Sleek & Smart"}
          description={"Stay ahead with technologically advanced electronics"}
        />
        <ImageCard
          linkTo={"/products/electronics"}
          image={electronicsSecondImage}
          alt={"Male model with phone"}
          title={"Innovation Unleashed"}
          description={"Discover high-tech innovation at its finest"}
        />
      </DualImageSection>
      {/* The <NewsletterSection/> contains a newsletter form with validation (validationSchema.js),
      allowing users to subscribe by entering their email in order to receive a 15% discount sent to the provided email.
      Once this process is completed, the global state from the newsletterSlice (submitted) is changed to true,
      causing this section to render the <NewsletterSuccess/> component instead of the <NewsletterForm/>. */}
      <NewsletterSection />
    </PageLayout>
  );
};

export default MainPage;
