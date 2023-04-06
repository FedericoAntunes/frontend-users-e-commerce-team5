import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ShippingOptions = ({ handleProcess }) => {
  //
  const handleBackButton = () => {
    handleProcess("shippingInfo");
  };

  const handlePaymentButton = () => {
    handleProcess("paymentOptions");
  };
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleBackButton();
        }}
        className="border border-1 px-1 tablet:py-2 rounded font-bold tablet:px-3 m-2"
      >
        <ArrowBackIcon />
        BACK
      </button>
      <h2 className="mb-2 text-[#737373]  text-xl font-terciaryFont m-2">
        Shipping Options
      </h2>
      <hr className="pb-3 opacity-30" />
      <div className="bg-[#1d9219c4] relative py-3 rounded cursor-pointer my-3 shadow hover:shadow-lg transition-all">
        <label className="p-2 text-textPrimary cursor-pointer select-none labelCheckbox w-full flex justify-around columns-2 mt-0">
          <input
            type="radio"
            name="radio"
            className="scale-150 m-2 bg-bgTertiaryColor"
          />
          <h3 className="inline-block text-2xl font-primaryFont text-textPrimary drop-shadow-lg w-5/6">
            Free Ground Shipping
          </h3>
        </label>
      </div>
      <div className=" bg-[#c5c5c5ae] relative py-3 rounded cursor-pointer my-3 shadow hover:shadow-lg transition-all">
        <label className="p-2 text-textPrimary cursor-pointer select-none labelCheckbox w-full flex justify-around columns-2 mt-0">
          <input
            type="radio"
            name="radio"
            className="scale-150 m-2 bg-bgTertiaryColor"
          />{" "}
          <h3 className="inline-block text-2xl font-primaryFont text-textPrimary drop-shadow-lg w-5/6">
            Fast Shipping ( + U$D 30)
          </h3>
        </label>
      </div>
      <div className=" bg-[#d7d362d8] relative py-3 rounded cursor-pointer my-3 shadow hover:shadow-lg transition-all">
        <label className="p-2 text-textPrimary cursor-pointer select-none labelCheckbox w-full flex justify-around columns-2 mt-0">
          <input
            type="radio"
            name="radio"
            className="scale-150 m-2 bg-bgTertiaryColor"
          />
          <h3 className="inline-block text-2xl font-primaryFont text-textPrimary drop-shadow-lg w-5/6">
            Inmediate delivery ( + U$D 100)
          </h3>
        </label>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          handlePaymentButton();
        }}
        className="bg-bgTertiaryColor w-full tablet:py-2  text-textPrimary py-1 my-2 font-terciaryFont"
      >
        Continue to Payment Options
      </button>
    </>
  );
};

export default ShippingOptions;
