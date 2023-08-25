import React, { useState } from "react";
import TextTemplate from "../TextTemplate";
import { ReactComponent as Icon } from "./image/icon.svg";
import MoreText from '../../UI/MoreText/MoreText';
import { SOME_TEXT } from '../../constants';


import "./style.scss";

const SectionReviews = () => {

  const [openMoretext, setOpenMoreText] = useState();


  const handleOpenMoreText = () => {
    if (openMoretext) {
      setOpenMoreText(false);
    } else {
      setOpenMoreText(true);
    }
  }

  return (
    <section className="reviews">
      <div className="reviews__container">
        <div className="reviews__content">
          <h3 className="reviews__title">
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
          </h3>
        </div>
        <div className="reviews__blocks">
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
            <div className="reviews__item-ui" onClick={handleOpenMoreText} >UI Soup</div>
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
            <div className="reviews__item-ui">UI Soup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionReviews;
