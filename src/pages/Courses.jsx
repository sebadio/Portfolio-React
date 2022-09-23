import { motion } from "framer-motion";
import { animation } from "../helper/";
import { useModal } from "../hooks/";
import { AnimatedTitle, InteractiveDiv, Modal } from "../components/";

export const Courses = ({ language, type }) => {
  const { title, description, coursesArray } = language;

  const { handleCloseModal, handleShowModal, modalProps, showModal } =
    useModal();

  const { animate, exit, initial } = animation;

  return (
    <motion.div
      className="w-full flex flex-col pb-[10vh] lg:pb-0 lg:ml-[5vw] pt-4 lg:justify-center items-center overflow-auto"
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <AnimatedTitle title={title} />
      <p className="mt-4 font-semibold text-white bg-[rgba(0,0,0,0.5)] rounded-full p-2 px-4 z-10">
        {description}
      </p>

      {showModal && (
        <Modal
          handleCloseModal={() => {
            handleCloseModal();
          }}
          props={modalProps}
        />
      )}

      <div className="flex w-full h-f flex-wrap justify-around items-center p-2 mt-12 gap-3">
        {coursesArray.map(({ title, description, link, image }) => (
          <InteractiveDiv
            handleShowModal={() => {
              handleShowModal(
                title,
                description,
                image,
                undefined,
                undefined,
                link,
                type
              );
            }}
            image={image}
            title={title}
            type="courses"
            key={title}
          />
        ))}
      </div>
    </motion.div>
  );
};
