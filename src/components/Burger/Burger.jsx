import React, { useState } from 'react';

import './style.scss';

const Burger = () => {

  const [open, setOpen] = useState(false);

  const isActive = open ? 'active' : '';


  const toggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  console.log('isActive', isActive)

  return (
    <>
    <button className={`menu__btn ${isActive ? 'menu--open' : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul className={`header__mobile ${isActive}`}>
      <li className="menu__item">
        <a href="#" className="menu__item-text">
          Home
        </a>
      </li>
      <li className="menu__item">
        <a href="#" className="menu__item-text">
          About Us
        </a>
      </li>
      <li className="menu__item">
        <a href="#" className="menu__item-text">
          Services{" "}
        </a>
      </li>
      <li className="menu__item">
        <a href="#" className="menu__item-text">
          Contact Us
        </a>
      </li>
    </ul> 
    </>
  );
};

export default Burger;