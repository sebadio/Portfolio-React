import { motion } from "framer-motion";
import { animation } from "../helper/";
import { AnimatedTitle } from "../components/";

const About = ({ language, type }) => {
  const { title, description, age, nationality, residence, email, phone } =
    language;

  const { initial, animate, exit } = animation;

  return (
    <motion.div
      className="w-full h-full flex flex-col lg:justify-center items-center gap-4 p-4 lg:ml-[5vw]"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <AnimatedTitle title={title} />
      <div className="flex flex-col lg:flex-row w-full gap-12 lg:h-full lg:mt-24 lg:gap-0">
        <div className="flex-1 lg:px-[10vw] w-full h-min font-medium text-xl lg:text-4xl">
          <p className="bg-[rgba(0,0,0,0.5)] backdrop-blur-md rounded-xl p-5">
            {description}
          </p>
        </div>
        <div className="flex-1 flex-col lg:flex-row flex justify-center">
          <ul className="lg:text-xl">
            <li className="p-3 bg-[rgba(0,0,0,0.5)] backdrop-blur-md rounded-t-xl">
              <span className="text-white font-bold ">
                {type === "es" ? "Edad: " : "Age: "}
              </span>
              {age}
            </li>
            <li className="p-3 bg-[rgba(0,0,0,0.5)] backdrop-blur-md">
              <span className="text-white font-bold ">
                {type === "es" ? "Nacionalidad: " : "Nationality: "}
              </span>
              {nationality}
            </li>
            <li className="p-3 bg-[rgba(0,0,0,0.5)] backdrop-blur-md">
              <span className="text-white font-bold ">
                {type === "es" ? "Residencia: " : "Residence: "}
              </span>
              {residence}
            </li>
            <li className="p-3 bg-[rgba(0,0,0,0.5)] backdrop-blur-md">
              <a href={`mailto:${email}`}>
                <span className="text-white font-bold ">Email: </span>
                {email}
              </a>
            </li>
            <li className="p-3 bg-[rgba(0,0,0,0.5)] backdrop-blur-md rounded-b-xl">
              <span className="text-white font-bold ">
                {type === "es" ? "Telefono: " : "Phone: "}
              </span>
              {phone}
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
