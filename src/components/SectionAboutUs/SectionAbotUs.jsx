import { MButton } from "../Button/Buttonx";
import { motion } from "framer-motion";
import About from "./image/about.png";
import AboutYellow from "./image/about__yellow.png";
import { SOME_TEXT } from "../../constants/index";

import TextTemplate from "../TextTemplate";

import "./reset.scss";
import "./style.scss";

const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};
const imgAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};



const SectionAboutUs = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2}}
        className="AboutUs"
      >
        <div className="AboutUs__container">
          <motion.div custom={1} variants={imgAnimation} className="about__bg">
            <img className="about__img" src={About} alt="My SVG" />
            <img className="about__img-decor" src={AboutYellow} alt="My SVG" />
          </motion.div>
          <div className="AboutUs__content">
            <motion.h3
              custom={1}
              variants={textAnimation}
              className="AboutUs__title"
            >
              <span>
                <TextTemplate
                  className="AboutUs__firstStroke"
                  text="About Us"
                />{" "}
              </span>
              <br />
              <span className="AboutUs__title-after">
                {SOME_TEXT.sectionAboutUs.title.titleTwo}
                <span className="lastWord-mod">
                  {SOME_TEXT.sectionAboutUs.title.titleOne}
                </span>
              </span>
            </motion.h3>
            <motion.p
              custom={2}
              variants={textAnimation}
              className="AboutUs__text"
            >
              {SOME_TEXT.placeholderText}
            </motion.p>
            <motion.p
              custom={3}
              variants={textAnimation}
              className="AboutUs__text"
            >
              {SOME_TEXT.placeholderText}
            </motion.p>
            <MButton
              custom={3}
              variants={textAnimation}
              buttonText="Explore More"
              onClick={() => {
                console.log("Button clicked");
              }}
              className="main-button"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default SectionAboutUs;
