import React from 'react';
import './style.scss';

const SliderText = ({ text, isOpen, id }) => {

    console.log('isOpen', isOpen)
    console.log('id', id)
    return (
        <div className={`s-none ${ isOpen === id ? 'actives' : ''}`}>{text}</div>
    );
}
export default SliderText;