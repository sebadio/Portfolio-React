import { motion } from "framer-motion";
import { animation } from "../helper/";
import { AnimatedTitle } from "../components/";

const ThankYou = ({ language }) => {
  const { animate, exit, initial } = animation;

  return (
    <motion.div
      className="w-full h-full flex flex-col p-2 lg:p-0 pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 justify-center items-center overflow-auto"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <AnimatedTitle
        title={language.title === "Contactame" ? "¡Gracias!" : "Thank You!"}
      />

      <p className="p-4 bg-[rgba(0,0,0,0.5)] m-4 backdrop-blur rounded-xl">
        {language.title === "Contactame"
          ? `Gracias por contactarte conmigo, tu mail fue enviado correctamente y te respondere en cuanto lo lea.`
          : `Thank you for contacting me, your mail was successfully sent and I will be contacting you right away.`}
      </p>
    </motion.div>
  );
};

export default ThankYou;
