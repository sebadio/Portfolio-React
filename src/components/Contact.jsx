import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faG, faPhone } from "@fortawesome/free-solid-svg-icons";
import { InteractiveLink } from "./InteractiveLink";
import { AnimatedTitle } from "./AnimatedTitle";

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
      <h1 className="text-[#496F69] flex justify-center items-center font-extrabold text-5xl">
        {<AnimatedTitle title={title} />}
      </h1>

      <div className="flex w-full justify-around py-4">
        <InteractiveLink id={"linkedin"} link={linkedin} icono={faLinkedinIn} />
        <InteractiveLink id={"github"} link={github} icono={faGithub} />
        <InteractiveLink id={"mail"} link={mail} icono={faEnvelope} />
        <InteractiveLink id={"phone"} link={phone} icono={faPhone} />
        <InteractiveLink id={"whatsapp"} link={whatsapp} icono={faWhatsapp} />
      </div>

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
