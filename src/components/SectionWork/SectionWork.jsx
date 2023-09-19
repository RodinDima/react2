import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Big from "./image/big.png";
import Small from "./image/small.png";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TextTemplate from "../TextTemplate";
import SliderText from "../../UI/MoreText/SliderText";
import { SOME_TEXT } from "../../constants";

import "swiper/css";
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

const SectionWork = () => {
  const [openSliderText, setOpenSliderText] = useState(null);

  const handleToggle = useCallback(
    (id) => {
      if (openSliderText === id) {
        setOpenSliderText(null);
      } else {
        setOpenSliderText(id);
      }
    },
    [openSliderText]
  );



  return (
    <motion.section initial="hidden" whileInView="visible" className="work">
      {/* {array.map((item) => <div key={item.id} onClick={() => handleToggle(item.id)} data-test-id={openSliderText}>{item.name}</div>)} */}
      <div className="work__container">
        <div className="work__content">
          <motion.h3
            custom={1}
            variants={textAnimation}
            className="work__title"
          >
            <span>
              <TextTemplate
                className="work__firstStroke"
                text="Our Recent Work"
              />{" "}
            </span>
            <br />
            <span className="work__title-after">
              By Our <span className="lastWord-mod">Experts</span>
            </span>
          </motion.h3>
          <motion.p custom={2} variants={textAnimation2} className="work__text">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </motion.p>
        </div>
      </div>
      <motion.div
        custom={5}
        variants={textAnimation2}
        className="work__slider slider__work"
      >
        <div className="slider-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
              },
            }}
            navigation={{
              clickable: true,
              prevEl: ".slider-prev-button",
              nextEl: ".slider-next-button",
            }}
          >
            <SwiperSlide>
              <div className="slider__work-box">
                <div className="slider__work-item">
                  <img className="big" src={Big} alt="My SVG" />
                  <img className="small" src={Small} alt="My SVG" />
                </div>
                <div className="slider__work-content">
                  <p
                    className="slider__work-text"
                    onClick={() => handleToggle("1")}
                  >
                    UI Soup
                  </p>
                  <a className="slider__work-btn" href="">
                    View Work
                  </a>
                </div>
                {openSliderText === "1" && (
                  <SliderText text={SOME_TEXT.placeholderText} />
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slider__work-box">
                <div className="slider__work-item">
                  <img className="big" src={Big} alt="My SVG" />
                  <img className="small" src={Small} alt="My SVG" />
                </div>
                <div className="slider__work-content">
                  <p
                    className="slider__work-text"
                    onClick={() => handleToggle("2")}
                  >
                    UI Soup
                  </p>
                  <a className="slider__work-btn" href="">
                    View Work
                  </a>
                </div>
                {openSliderText === "2" && (
                  <SliderText text={SOME_TEXT.placeholderText} />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__work-box">
                <div className="slider__work-item">
                  <img className="big" src={Big} alt="My SVG" />
                  <img className="small" src={Small} alt="My SVG" />
                </div>
                <div className="slider__work-content">
                  <p
                    className="slider__work-text"
                    on
                    onClick={() => handleToggle("3")}
                  >
                    UI Soup
                  </p>

                  <a className="slider__work-btn" href="">
                    View Work
                  </a>
                </div>
                {openSliderText === "3" && (
                  <SliderText text={SOME_TEXT.placeholderText} />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__work-box">
                <div className="slider__work-item">
                  <img className="big" src={Big} alt="My SVG" />
                  <img className="small" src={Small} alt="My SVG" />
                </div>
                <div className="slider__work-content">
                  <p
                    className="slider__work-text"
                    on
                    onClick={() => handleToggle("4")}
                  >
                    UI Soup
                  </p>
                  <a className="slider__work-btn" href="">
                    View Work
                  </a>
                </div>
                {openSliderText === "4" && (
                  <SliderText text={SOME_TEXT.placeholderText} />
                )}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="slider__work slider-navigation">
          <div className="slider-prev-button"></div>
          <div className="slider-next-button"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionWork;
