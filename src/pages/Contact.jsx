import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { InteractiveLink, AnimatedTitle } from "../components/";
import { animation } from "../helper/";

export const Contact = ({ language }) => {
  const { title, linkedin, github, mail, phone, whatsapp } = language;

  const { initial, animate, exit } = animation;

  return (
    <motion.div
      className="w-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] my-auto pt-4 items-center overflow-auto"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <AnimatedTitle title={title} />

      <div className="flex flex-wrap flex-col lg:flex-row justify-evenly w-full">
        <div className="flex flex-1 flex-wrap lg:flex-nowrap lg:flex-row w-full items-center justify-center lg:gap-4 py-4">
          <InteractiveLink
            id={"linkedin"}
            link={linkedin}
            icono={faLinkedinIn}
          />
          <InteractiveLink id={"github"} link={github} icono={faGithub} />
          <InteractiveLink id={"mail"} link={mail} icono={faEnvelope} />
          <InteractiveLink id={"phone"} link={phone} icono={faPhone} />
          <InteractiveLink id={"whatsapp"} link={whatsapp} icono={faWhatsapp} />
        </div>
      </div>
    </motion.div>
  );
};
