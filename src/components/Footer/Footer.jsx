import './reset.scss';
import './style.scss';
import SimpleMap from '../SimpleMap/index';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <h3 className="footer__title">Dream Agency</h3>
          <p className="footer__text">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
          <form className="footer__form" action="">
            <div className="footer__form-text">Get In Touch</div>
            <div className='footer__form-box'>
              <input
                className="footer__input"
                placeholder="Enter Your Email"
                type="text"
              />
              <button className="footer__btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="footer__map"><SimpleMap /></div>
      </div>
    </footer>
  );
}




export default Footer ;