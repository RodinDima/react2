import { motion } from "framer-motion";

import SimpleMap from "../SimpleMap/index";

import "./reset.scss";

import "./style.scss";

const textAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.7 },
  }),
};
const textAnimation2 = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.7 },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="footer"
    >
      <div className="footer__container">
        <div className="footer__content">
          <motion.h3
            custom={1}
            variants={textAnimation}
            className="footer__title"
          >
            Dream Agency
          </motion.h3>
          <motion.p
            custom={2}
            variants={textAnimation}
            className="footer__text"
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </motion.p>
          <motion.form
            custom={3}
            variants={textAnimation}
            className="footer__form"
            action=""
          >
            <div className="footer__form-text">Get In Touch</div>
            <div className="footer__form-box">
              <input
                className="footer__input"
                placeholder="Enter Your Email"
                type="text"
              />
              <button className="footer__btn" type="submit">
                Send
              </button>
            </div>
          </motion.form>
        </div>
        <motion.div
          custom={1}
          variants={textAnimation2}
          className="footer__map"
        >
          <SimpleMap />
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
