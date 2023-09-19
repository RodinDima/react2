


import React from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { forwardRef } from "react";
import style from './style.module.css';

export const Button = forwardRef((props, ref) => {
	const {
		className,
		buttonText,
		onClick,
	} = props
	return (
		<button ref={ref} className={cn(style.primalBtn, className)} onClick={onClick} >{buttonText}</button>
	);
})

export const MButton = motion(Button);

export default MButton;
