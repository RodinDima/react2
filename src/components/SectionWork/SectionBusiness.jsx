import React from 'react';
import TextTemplate from '../TextTemplate';
import Web from './image/web.png';

import './style.scss';

const SectionBusiness = () => {
  return (
    <section className='business'>
      <div className="business__container">
          {/*<TextTemplate>
            <span className={style['special-text']}>What We Do</span> <span className={style['special-text']}>For Your</span> <span className={style['special-text']}>Business</span> <span className={style['pseudo-class-text']}>Fake or Real</span>
          </TextTemplate>*/}
         <div className='business__content'>
            <h3 className='busines__title'><span><TextTemplate className="busines__firstStroke" text="What we do"/> </span><br /><span className='business__title-after'>For Your <span className='lastWord-mod'>Busines</span> <TextTemplate/></span></h3> 
            <div className="slider buisness__slider">
              <div className="slider__box">
                <div className="slider__item">
                  <div className="slider__item-img">
                  <img src={Web} alt="My SVG" />
                  </div>
                  <div className="slider__item-title">Website Design</div>
                  <div className="slider__item-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                </div>
                  <div className="slider__item">
                    <div className="slider__item-img">
                    <img src={Web} alt="My SVG" />
                    </div>
                    <div className="slider__item-title">Website Design</div>
                    <div className="slider__item-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                </div>
                  <div className="slider__item">
                    <div className="slider__item-img">
                    <img src={Web} alt="My SVG" />
                    </div>
                    <div className="slider__item-title">Website Design</div>
                    <div className="slider__item-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                </div>
                 </div>
            </div>
         </div>
      </div>
    </section>
  );
}

export default SectionBusiness;