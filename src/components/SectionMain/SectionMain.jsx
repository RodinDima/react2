
import { motion } from 'framer-motion';
import { MButton } from '../Button/Buttonx';

import MainBg from "./image/main-bg.png";
import Yellow from "./image/yellow.png";
import TextTemplate from "../TextTemplate";

import "./reset.scss";
import "./style.scss";


const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.5}
  }),
};
const imgAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.5}
  }),
};



const SectionMain = () => {
  return (
    <>
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="main"
      >
        <div className="main__container">
          <div className="main__content">
            <motion.h3
              custom={1}
              variants={textAnimation}
              className="main__title title"
            >
              <span>
                <TextTemplate className="firstStroke" text="We Help you" />{" "}
              </span>
              <span className="title-after">
                to grow your <span className="lastWord">Busines</span>
              </span>
            </motion.h3>
            <motion.div
              custom={2}
              variants={textAnimation}
              className="main__text-paragraph"
            >
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </motion.div>
            <MButton
              custom={3}
              variants={textAnimation}
              buttonText="Get Started"
              onClick={() => {
                console.log("Button clicked");
              }}
              className="main-button"
            />
          </div>

          <motion.div
            custom={2}
            variants={imgAnimation}
            className="image-container"
          >
            <img className="main__img" src={MainBg} alt="My SVG" />
            <img className="yellow" src={Yellow} alt="My SVG" />
            <div></div>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
};

export default SectionMain;
