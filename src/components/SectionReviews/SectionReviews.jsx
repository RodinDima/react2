import React, { useState } from "react";
import { motion } from "framer-motion";

import TextTemplate from "../TextTemplate";

import { ReactComponent as Icon } from "./image/icon.svg";

import MoreText from '../../UI/MoreText/MoreText';
import { SOME_TEXT } from '../../constants';

import "./style.scss";

const textAnimation = {
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
const textAnimation2 = {
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

const SectionReviews = () => {

  const [openMoretext, setOpenMoreText] = useState();


  const handleOpenMoreText = () => {
    if (openMoretext) {
      setOpenMoreText(false);
    } else {
      setOpenMoreText(true);
    }
  }
  const [openSecondtext, setOpenSecondText] = useState();

  const handleOpenSecondText = () => {
    if (openSecondtext) {
      setOpenSecondText(false);
    }
    else {
      setOpenSecondText(true);
    }

  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="reviews"
    >
      <div className="reviews__container">
        <div className="reviews__content">
          <motion.h3
            custom={1}
            variants={textAnimation}
            className="reviews__title"
          >
            <span>
              <TextTemplate
                className="reviews__firstStroke"
                text="Our Testimonials"
              />{" "}
            </span>
            <br />
            <span className="reviews__title-after">
              What Our Clients Are <span className="lastWord-mod">Saying</span>
            </span>
          </motion.h3>
        </div>
        <motion.div
          custom={2}
          variants={textAnimation2}
          className="reviews__blocks"
        >
          <div className="reviews__item">
            <div className="reviews__item-img">
              <Icon />
            </div>
            <div className="reviews__item-text">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </div>
            <div className="reviews__item-ui" onClick={handleOpenMoreText}>
              UI Soup
            </div>
            <MoreText text={SOME_TEXT.placeholderText} isOpen={openMoretext} />
          </div>
          <div className="reviews__item">
            <div className="reviews__item-img">
              <Icon />
            </div>
            <div className="reviews__item-text">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </div>
            <div className="reviews__item-ui" onClick={handleOpenSecondText}>
              UI Soup
            </div>
            <MoreText
              text={SOME_TEXT.placeholderText}
              isOpen={openSecondtext}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionReviews;
