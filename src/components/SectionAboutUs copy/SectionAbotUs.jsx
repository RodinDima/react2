import './reset.scss';
import './style.scss';
import Button from '../Button/Buttonx';
import About from './image/about.png';
import AboutYellow from './image/about__yellow.png';
// import Yellow from './image/yellow.png';

import TextTemplate from '../TextTemplate';






const SectionAboutUs = () => {
  return (
    <>

      <section className="AboutUs">

        <div className="AboutUs__container">

          <div className='about__bg'>
            <img className="about__img" src={About} alt="My SVG" />
            <img className="about__img-decor" src={AboutYellow} alt="My SVG" />
            <div className='about__dashedCircle'></div>


          </div>


          <div className="AboutUs__content">


            <h3 className='AboutUs__title'><span><TextTemplate className="busines__firstStroke" text="About Us" /> </span><br /><span className='business__title-after'>Fake or <span className='lastWord-mod'>Real</span> <TextTemplate /></span></h3>
            <p className="AboutUs__text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="AboutUs__text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
            
            <Button
              buttonText="Explore More"
              onClick={() => {
                console.log('Button clicked');
              }}
              className="main-button" />
          </div>


        </div>




      </section>




    </>
  );
}

export default SectionAboutUs;