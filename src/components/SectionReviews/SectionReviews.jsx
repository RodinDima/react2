import React from 'react';
import TextTemplate from '../TextTemplate';
import Icon from './image/icon.svg';


import './style.scss';

const SectionReviews = () => {
  return (
    <section className='reviews'>
      <div className="reviews__container">
        <div className="reviews__content">
          <h3 className='work__title'><span><TextTemplate className="busines__firstStroke" text="Our Testimonials" /> </span><br /><span className='business__title-after'>What Our Clients Are  <span className='lastWord-mod'>Saying</span> <TextTemplate /></span></h3>
       
        </div>
        <div className="reviews__blocks">
          <div className="reviews__item">
            <div className="reviews__item-img">
            <img src={Icon} alt="My SVG" />
            </div>
            <div className="reviews__item-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
            <div className="reviews__item-ui">UI Soup</div>
          </div>
          <div className="reviews__item">
            <div className="reviews__item-img">
            <img src={Icon} alt="My SVG" />
            </div>
            <div className="reviews__item-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
            <div className="reviews__item-ui">UI Soup</div>
          </div>
        </div>

      </div>





   

      
    </section >
  );
}

export default SectionReviews;