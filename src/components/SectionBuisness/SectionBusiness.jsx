import React from 'react';

import './style.scss';

const SectionBusiness = () => {
  return (
    <section className='business'>
      <div className="business__container">
        <div className="business__content">
          {/*<TextTemplate>
            <span className={style['special-text']}>What We Do</span> <span className={style['special-text']}>For Your</span> <span className={style['special-text']}>Business</span> <span className={style['pseudo-class-text']}>Fake or Real</span>
          </TextTemplate>*/}
          <h3 className="title content__title"><span>What We Do </span><span className='title-after'>For Your Business</span></h3> 
          <div className="slider buisness__slider">
            <div className="slider__box">
              <div className="slider__item">
                <div className="slider__item-img"></div>
                <div className="slider__item-title">Website Design</div>
                <div className="slider__item-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
                <div className="slider__item">
                  <div className="slider__item-img"></div>
                  <div className="slider__item-title">Website Design</div>
                  <div className="slider__item-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
                <div className="slider__item">
                  <div className="slider__item-img"></div>
                  <div className="slider__item-title">Website Design</div>
                  <div className="slider__item-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
                <div className="slider__item">
                  <div className="slider__item-img"></div>
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