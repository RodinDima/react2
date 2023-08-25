import React from "react";
import TextTemplate from "../TextTemplate";
import Web from "./image/web.png";

import { Navigation,  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.scss";

const SectionBusiness = () => {
  
  
  return (
    <section className="business">
      <div className="business__container">
        <div className="business__content">
          {/*<div className='business__dashedCircle'></div>*/}

          <h3 className="busines__title">
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
          </h3>
          <div className="slider buisness__slider">
            <Swiper
              slidesPerView={3}
              spaceBetween={50}
              modules={[Navigation]}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                900: {
                  slidesPerView: 1,
                },
                1100: {
                  slidesPerView: 1,
                },
                1400: {
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
    </section>
  );
};

export default SectionBusiness;
