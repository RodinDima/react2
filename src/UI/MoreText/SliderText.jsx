import React from 'react';
import './style.scss';

const SliderText = ({ text, isOpen, id }) => {
    return (
        <div className={`s-none actives`}>{text}</div>
    );
}
export default SliderText;