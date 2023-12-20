import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSubmitted } from "../../features/newsletterSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validationSchema";
const NewsletterSection = () => {
  const dispatch = useDispatch();
  const submitted = useSelector((state) => state.newsletter.submitted);

  const [focusedField, setFocusedField] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    if (!errors.email) {
      dispatch(setSubmitted(data));
      reset();
    }
  };

  return (
    <section className="flex flex-col m-auto bg-custom_champagne_pink shadow-lg w-full p-5 mb-20">
      {!submitted ? (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="email" className="md:text-center">
            <h4 className="font-bold text-xl md:text-lg sm:text-base md:text-md">
              Get an Exclusive 15% Discount!
            </h4>
            <p className="text-sm block md:text-xs">
              Unlock Your 15% Discount by Subscribing to Our Newsletter
            </p>
          </label>
          <section className="flex md:flex-col items-center w-full md:text-sm mt-2">
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="bg-custom_linen placeholder-custom_placeholder_text border border-black py-1.5 px-2 mr-4 md:mr-0 w-3/4 md:w-full focus:outline-none"
              {...register("email")}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
            />
            <button
              type="submit"
              className="bg-custom_pale_dogwood hover:bg-custom_pale_dogwood-600 border border-black font-semibold px-2 py-1.5 w-1/4 md:w-2/5 sm:w-3/4 md:mt-2"
            >
              SIGN UP
            </button>
          </section>
          {focusedField === "email" && errors.email && (
            <p className="text-red-500 text-sm mt-1 md:text-center">
              {errors.email.message}
            </p>
          )}
        </form>
      ) : (
        <section className="text-center">
          <h4 className="text-green-600 text-lg font-bold">
            Thank you for subscribing!
          </h4>
          <p className="mt-2">
            You have unlocked an exclusive 15% discount. Check your email for
            details.
          </p>
        </section>
      )}
    </section>
  );
};

export default NewsletterSection;
