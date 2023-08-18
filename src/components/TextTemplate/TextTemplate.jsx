import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './TextTemplate.module.scss';

const TextTemplate = ({ className, text }) => {
  return <div className={cn(style.textTemplate, className, style['special-text'])}>{text}</div>;
};

TextTemplate.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default TextTemplate;