import React  from 'react';
import cn from 'classnames';

import style from './style.module.css';

const Buttonx = (props) => {
	 
	const {
		  className,
		  buttonText,
		  onClick,
	 } = props
	 return (
		  <button className={cn(style.primalBtn, className)} onClick={onClick} >{buttonText}</button>
	 );
}

export default Buttonx;
