import React  from 'react';

import './style.scss';

const MoreText = ({text, isOpen}) => {

	return (
		<div className={`d-none  ${isOpen ? 'open' : ''}`}>{text}</div>
	);
}

export default MoreText;
