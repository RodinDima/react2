import "./reset.scss";
import "./style.scss";
import FaceBook from "./image/Facebook.svg";
import In from "./image/in.svg";
import Inst from "./image/inst.svg";
import Logo from "./image/logo.png";
import React, { useState } from 'react';

import Burger from "../Burger/Burger";



const Header = () => {
  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__content">
            
            
            
            
            
            <nav className="header__menu">
              <ul className="header__list">
                <li className="header__item">
                  <a href="#" className="header__item-text">
                    Home
                  </a>
                </li>
                <li className="header__item">
                  <a href="#" className="header__item-text">
                    About Us
                  </a>
                </li>
                <li className="header__item">
                  <a href="#" className="header__item-text">
                    Services{" "}
                  </a>
                </li>
                <li className="header__item">
                  <a href="#" className="header__item-text">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            
           
            <Burger />
           




            <div className="header__logo">
              <a href="#" className="header__logo-link">
                <img src={Logo} alt="My SVG" />
              </a>
            </div>
            <div className="header__social">
              <a href="#" className="header__social-link">
                <img src={FaceBook} alt="My SVG" />
              </a>

              <a href="#" className="header__social-link">
                <img src={In} alt="My SVG" />
              </a>

              <a href="#" className="header__social-link">
                <img className="inst" src={Inst} alt="My SVG" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
