import React from 'react';
import './style.scss';
const SliderText = ({ text, isOpen }) => {
    return (
        <div className={`s-none ${ isOpen ? 'actives' : ''}`}>{text}</div>
    );
}
export default SliderText;