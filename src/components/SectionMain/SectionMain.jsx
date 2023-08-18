import './reset.scss';
import './style.scss';
import Button from '../Button/Buttonx';
import MainBg from './image/main-bg.png';
import Yellow from './image/yellow.png';
import Yellow2 from './image/yellow-2.png';
import Circle from './image/circle.png';






const SectionMain = () => {
  return (
    <>

      <main className="main">
        <div className='rightTopCorner'></div>
        <div className="main__container">
          <div className="main__content">
            <div className="main__text">
              <span class="main__text-title-before"></span>
              <h1 className="main__text-title"><p>We Help you</p> to grow your Business</h1>
              <div className="main__text-paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
             
              
              <Button
                buttonText="Get Started"
                onClick={() => {
                  console.log('Button clicked');
                }}
                className="main-button"
              />
            </div>
              
             <div className='test'>         
                <img className="yellow" src={Yellow} alt="My SVG" />
                {/* <img className="yellow2" src={Yellow2} alt="My SVG" /> */}
                {/* <img className="circle" src={Circle} alt="My SVG" /> */}
                <div className='dashedCircle'></div>
                <img className="main__img" src={MainBg} alt="My SVG" />
              </div>
          </div>
        </div>
      </main>




    </>
  );
}

export default SectionMain;