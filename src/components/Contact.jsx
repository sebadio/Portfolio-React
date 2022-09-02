import React from "react";

export const Contact = ({ language }) => {
  const { title, linkedin, github, mail, phone, whatsapp, form } = language;

  const {
    name,
    namePlaceholder,
    email,
    emailPlaceholder,
    description,
    descriptionPlaceholder,
    button,
  } = form;

  return (
    <div className="w-full h-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto">
      <h1>{title}</h1>

      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        Linkedin
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={mail} target="_blank" rel="noopener noreferrer">
        Mail
      </a>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <a href={phone} target="_blank" rel="noopener noreferrer">
        Phone
      </a>

      <div className="flex flex-col border-white border-2 p-4">
        <form className="flex flex-col gap-4" action="">
          <h3>{name} *</h3>
          <input
            required
            type="text"
            className="p-4 bg-transparent border-2 border-[#496F69] transition-all focus:shadow-lg focus:shadow-[rgba(255,255,255,0.1)] formInput"
            placeholder={namePlaceholder}
          />

          <h3>{email} *</h3>
          <input
            required
            type="text"
            className="p-4 bg-transparent border-2 border-[#496F69] transition-all focus:shadow-lg focus:shadow-[rgba(255,255,255,0.1)] formInput"
            placeholder={emailPlaceholder}
          />

          <h3>{description}</h3>
          <textarea
            className="resize-none p-4 bg-transparent border-2 border-[#496F69] transition-all focus:shadow-lg focus:shadow-[rgba(255,255,255,0.1)] formInput"
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder={descriptionPlaceholder}
          ></textarea>

          <button type="submit">{button}</button>
        </form>
      </div>
    </div>
  );
};
