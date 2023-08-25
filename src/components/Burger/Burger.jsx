import React, { useState } from 'react';

const Burger = ({ menuOpen, toggleMenu }) => {
  return (
    <button className={`menu__btn ${menuOpen ? 'menu--open' : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;