import React from 'react';
import TextTemplate from '../TextTemplate';
import Big from './image/big.png';
import Small from './image/small.png';

import './style.scss';

const SectionWork = () => {
  return (
    <section className='work'>
      <div className="work__container">
        <div className="work__content">
          <h3 className='work__title'><span><TextTemplate className="busines__firstStroke" text="What we do" /> </span><br /><span className='business__title-after'>For Your <span className='lastWord-mod'>Busines</span> <TextTemplate /></span></h3>
          <p className="work__text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="work__slider slider__work">
          <div className="slider__work-box">
            <div className="slider__work-item">
              <img src={Big} alt="My SVG" />
              <img src={Small} alt="My SVG" />
            </div>
            <div className="slider__work-content">
              <p className="slider__work-text">UI Soup</p>
              <a className="slider__work-btn" href="">View Work</a>

            </div>

          </div>
          <div className="slider__work-box">
            <div className="slider__work-item">
              <img src={Big} alt="My SVG" />
              <img src={Small} alt="My SVG" />
            </div>
            <div className="slider__work-content">
              <p className="slider__work-text">UI Soup</p>
              <a className="slider__work-btn" href="">View Work</a>

            </div>

          </div>



        </div>

      </div>
    </section>
  );
}

export default SectionWork;