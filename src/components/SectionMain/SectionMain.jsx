import './reset.scss';
import './style.scss';
import Button from '../Button/Buttonx';
import MainBg from './image/main-bg.png';
import Yellow from './image/yellow.png';
import TextTemplate from '../TextTemplate';

const SectionMain = () => {
  return (
    <>
      <main className="main">
        
        <div className="main__container">
          <div className="main__content">
          
              <h3 className="main__title title"><span><TextTemplate className="firstStroke" text="What we do" /> </span><span className='title-after'>to grow your <span className='lastWord'>Busines</span></span></h3> 
              <div className="main__text-paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
              <Button
                buttonText="Get Started"
                onClick={() => {
                  console.log('Button clicked');
                }}
                className="main-button"/>
            
            
            </div>
              
             <div className='main__bg'>         
                {/*<img className="yellow" src={Yellow} alt="My SVG" />
                <div className='dashedCircle'></div>*/}
                <img className="main__img" src={MainBg} alt="My SVG" />
              </div>
          </div>
       
      </main>
      {/*<div className='rightTopCorner'></div>*/}
    </>
  );
}

export default SectionMain;