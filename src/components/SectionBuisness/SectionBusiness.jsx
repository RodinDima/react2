import React from "react";

import { motion } from "framer-motion";

import TextTemplate from "../TextTemplate";
import Web from "./image/web.png";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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





const SectionBusiness = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" className="business">
      <div className="business__container">
        <div className="business__content">
          <motion.h3
            custom={1}
            variants={textAnimation}
            className="busines__title"
          >
            <span>
              <TextTemplate
                className="busines__firstStroke"
                text="What we do"
              />
            </span>
            <br />
            <span className="business__title-after">
              For Your
              <span className="lastWord-mod">Busines</span>
            </span>
          </motion.h3>
          <div className="slider buisness__slider">
            <Swiper
              slidesPerView={3}
              spaceBetween={50}
              modules={[Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },

                640: {
                  width: 640,
                  slidesPerView: 1,
                },
              }}
              navigation={{
                clickable: true,
                prevEl: ".slider-prev-button",
                nextEl: ".slider-next-button",
              }}
            >
              <SwiperSlide style={{ width: "300px", marginRight: "" }}>
                <div className="slider__item">
                  <div className="slider__item-img">
                    <img src={Web} alt="My SVG" />
                  </div>
                  <div className="slider__item-title">Website Design</div>
                  <div className="slider__item-text">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider__item">
                  <div className="slider__item-img">
                    <img src={Web} alt="My SVG" />
                  </div>
                  <div className="slider__item-title">Website Design</div>
                  <div className="slider__item-text">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slider__item">
                  <div className="slider__item-img">
                    <img src={Web} alt="My SVG" />
                  </div>
                  <div className="slider__item-title">Website Design</div>
                  <div className="slider__item-text">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__item">
                  <div className="slider__item-img">
                    <img src={Web} alt="My SVG" />
                  </div>
                  <div className="slider__item-title">Website Design</div>
                  <div className="slider__item-text">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__item">
                  <div className="slider__item-img">
                    <img src={Web} alt="My SVG" />
                  </div>
                  <div className="slider__item-title">Website Design</div>
                  <div className="slider__item-text">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="slider-navigation">
              <div className="slider-prev-button"></div>
              <div className="slider-next-button"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionBusiness;
