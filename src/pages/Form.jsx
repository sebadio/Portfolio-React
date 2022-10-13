import { motion } from "framer-motion";
import { animation } from "../helper/";
import { AnimatedTitle } from "../components/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Form = ({ language }) => {
  const { animate, exit, initial } = animation;

  const { form } = language;

  const {
    name,
    namePlaceholder,
    email,
    emailPlaceholder,
    description,
    descriptionPlaceholder,
    button,
  } = form;

  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full h-full flex flex-col p-2 lg:p-0 pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 items-center overflow-auto"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <form
        action="https://formsubmit.co/sebastiandiazdopazo@gmail.com"
        method="POST"
        className="relative flex w-full lg:w-3/4 items-center flex-col gap-4 mt-4 lg:mt-12 bg-[rgba(0,0,0,0.5)] backdrop-blur-xl rounded-xl p-2 shadow-xl shadow-[rgba(0,0,0,0.5)]"
      >
        <AnimatedTitle
          style={{ backgroundColor: "transparent", backdropFilter: "none" }}
          title={name === "Name" ? "Form" : "Formulario"}
        />
        <button
          onClick={() => navigate(-1)}
          className="w-12 aspect-square h-auto absolute top-4 left-4 "
        >
          <FontAwesomeIcon
            className="text-5xl transition-all text-[#fc3986] hover:text-white"
            icon={faArrowLeft}
          />
        </button>

        <input
          type="hidden"
          name="_autoresponse"
          value={
            name === "Name"
              ? "Thank you for contacting me, your mail was successfully sent and I will be contacting you right away."
              : "Gracias por contactarte conmigo, tu mail fue enviado correctamente y te respondere en cuanto lo lea."
          }
        ></input>
        <input
          type="hidden"
          name="_next"
          value="https://sebadio.github.io/Portafolio/#/thankYou"
        ></input>

        <h3 className="z-10 flex w-full lg:w-3/4 mt-4 text-white font-semibold rounded-full p-2 px-4">
          {name} *
        </h3>
        <input
          name="name"
          required
          type="text"
          className="z-10 p-4 w-full rounded-full lg:w-3/4 bg-[rgba(0,0,0,0.65)] text-white border-2 border-[#fc3986] transition-all focus:shadow-lg focus:shadow-[rgba(255,255,255,0.1)] focus:border-[#ffffff] formInput"
          placeholder={namePlaceholder}
        />

        <h3 className="z-10 flex w-full lg:w-3/4 mt-4 text-white font-semibold rounded-full p-2 px-4">
          {email} *
        </h3>
        <input
          name="email"
          required
          type="text"
          className="z-10 p-4 w-full rounded-full lg:w-3/4 bg-[rgba(0,0,0,0.65)] text-white border-2 border-[#fc3986] transition-all focus:shadow-lg focus:shadow-[rgba(255,255,255,0.1)] focus:border-[#ffffff] formInput"
          placeholder={emailPlaceholder}
        />

        <h3 className="z-10 flex w-full lg:w-3/4 mt-4 text-white font-semibold rounded-full p-2 px-4">
          {description}
        </h3>
        <textarea
          className="z-10 resize-none p-4 w-full rounded-xl lg:w-3/4 bg-[rgba(0,0,0,0.65)] text-white border-2 border-[#fc3986] transition-all focus:shadow-lg focus:shadow-[rgba(255,255,255,0.1)] focus:border-[#ffffff] formInput"
          name="description"
          id="textarea"
          cols="30"
          rows="10"
          placeholder={descriptionPlaceholder}
        ></textarea>

        <button
          className="z-10 border-[#fc3986] rounded-full border-2 w-min px-6 py-2 font-bold transition-all bg-[rgba(0,0,0,0.3)] hover:bg-[#fc3986] hover:border-white text-white"
          type="submit"
        >
          {button}
        </button>
      </form>
    </motion.div>
  );
};

export default Form;
