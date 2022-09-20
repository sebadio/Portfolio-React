import React from "react";

export const Form = ({ props }) => {
  const {
    name,
    namePlaceholder,
    email,
    emailPlaceholder,
    description,
    descriptionPlaceholder,
    button,
  } = props;

  return (
    <form className="flex items-center flex-col gap-4" action="">
      <h3 className="flex w-full lg:w-3/4 mt-4 text-white font-semibold bg-[rgba(0,0,0,0.5)] rounded-full p-2 px-4">
        {name} *
      </h3>
      <input
        required
        type="text"
        className="p-4 w-full rounded-full lg:w-3/4 bg-[rgba(0,0,0,0.65)] text-white border-2 border-[#fc3986] transition-all focus:shadow-lg focus:shadow-[rgba(255,255,255,0.1)] focus:border-[#ffffff] formInput"
        placeholder={namePlaceholder}
      />

      <h3 className="flex w-full lg:w-3/4 mt-4 text-white font-semibold bg-[rgba(0,0,0,0.5)] rounded-full p-2 px-4">
        {email} *
      </h3>
      <input
        required
        type="text"
        className="p-4 w-full rounded-full lg:w-3/4 bg-[rgba(0,0,0,0.65)] text-white border-2 border-[#fc3986] transition-all focus:shadow-lg focus:shadow-[rgba(255,255,255,0.1)] focus:border-[#ffffff] formInput"
        placeholder={emailPlaceholder}
      />

      <h3 className="flex w-full lg:w-3/4 mt-4 text-white font-semibold bg-[rgba(0,0,0,0.5)] rounded-full p-2 px-4">
        {description}
      </h3>
      <textarea
        className="resize-none p-4 w-full rounded-xl lg:w-3/4 bg-[rgba(0,0,0,0.65)] text-white border-2 border-[#fc3986] transition-all focus:shadow-lg focus:shadow-[rgba(255,255,255,0.1)] focus:border-[#ffffff] formInput"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        placeholder={descriptionPlaceholder}
      ></textarea>

      <button
        className="border-[#fc3986] rounded-full border-2 w-min px-6 py-2 font-bold transition-all bg-[rgba(0,0,0,0.3)] hover:bg-[#fc3986] hover:border-white text-white"
        type="submit"
      >
        {button}
      </button>
    </form>
  );
};
