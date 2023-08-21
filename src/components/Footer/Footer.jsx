import './reset.scss';
import './style.scss';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%',
};

const Footer = (props) => {
  return (
    
    
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <h3 className="footer__title">Dream Agency</h3>
          <p className="footer__text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          <form className="footer__form" action="">
            <div className="footer__form-text">Get In Touch</div>
            <input className="footer__input" placeholder="Enter Your Email" type="text" />
          </form>
          <button className='footer__btn'>Send </button>
        </div>
        <div className="footer__map">
          <Map
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 41.8781,
              lng: -87.6298,
            }}
          />
        </div>
      </div>
    </footer>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD2vsutIkzReuwBCujfYSjdOxk87nb7Em0',
})(Footer);