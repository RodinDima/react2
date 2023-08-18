import TextTemplate from '../TextTemplate/TextTemplate';
import './reset.scss';
import './style.scss';
import style from './style.module.scss'; // Додайте цей рядок



import React from 'react';


const SectionBusiness = () => {
  //const fullText = "What We Do For Your Business";
  //const words = fullText.split(' ');
  //const firstTwoWords = words.slice(0, 3).join(' ');
  //const remainingText = words.slice(3).join(' ');

  return (
    <section className='business'>
      <div className="business__container">
        <div className="business__content">
          <TextTemplate>
            <span className="special-text">What We Do</span> <span className={style['pseudo-class-text']}>For Your Business</span>
          </TextTemplate>
        </div>
      </div>
    </section>
  );
}

export default SectionBusiness;