import "./reset.scss";
import "./style.scss";
import Button from "../Button/Buttonx";
import About from "./image/about.png";
import AboutYellow from "./image/about__yellow.png";
import { SOME_TEXT } from "../../constants/index";

import TextTemplate from "../TextTemplate";

const SectionAboutUs = () => {
  return (
    <>
      <section className="AboutUs">
        <div className="AboutUs__container">
          <div className="about__bg">
            <img className="about__img" src={About} alt="My SVG" />
            <img className="about__img-decor" src={AboutYellow} alt="My SVG" />
          </div>
          <div className="AboutUs__content">
            <h3 className="AboutUs__title">
              <span>
                <TextTemplate
                  className="AboutUs__firstStroke"
                  text="About Us"
                />{" "}
              </span>
              <br />
              <span className="AboutUs__title-after">
                {SOME_TEXT.sectionAboutUs.title.titleTwo}
                <span className="lastWord-mod">
                  {SOME_TEXT.sectionAboutUs.title.titleOne}
                </span>
              </span>
            </h3>
            <p className="AboutUs__text">{SOME_TEXT.placeholderText}</p>
            <p className="AboutUs__text">{SOME_TEXT.placeholderText}</p>
            <Button
              buttonText="Explore More"
              onClick={() => {
                console.log("Button clicked");
              }}
              className="main-button"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionAboutUs;
