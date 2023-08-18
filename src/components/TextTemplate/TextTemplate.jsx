import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './TextTemplate.module.scss';

const TextTemplate = ({ className, text }) => {
  return <span className={cn(style.textTemplate, className, style['special-text'])}>{text}</span>;
};

TextTemplate.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default TextTemplate;