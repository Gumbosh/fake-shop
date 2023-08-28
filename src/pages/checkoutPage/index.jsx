import PageLayout from "../../layout/PageLayout";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <PageLayout>
      <main className="text-custom_important_text text-center flex flex-col items-center gap-5">
        <h2 className="font-bold text-2xl">Thank You For Your Order</h2>
        <p className="text-xs">
          Your order has been placed and is being processed. You will recive an
          email with the order details.
        </p>
        <Link to="/" className="text-custom_important_text underline">
          Back to homepage
        </Link>
      </main>
    </PageLayout>
  );
};

export default CheckoutPage;
