import React from 'react';
import PropTypes from 'prop-types';

import css from './style.module.scss';

const Spacer = ({
  className,
  size,
}) => {
  const cns = [css.component, css[`size${size}`], className].filter(i => i).join(' ');
  return (
    <section className={cns} />
  );
};

Spacer.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([1,2,6]),
};
Spacer.defaultProps = {
  className: null,
  size: 1,
};

Spacer.displayName = 'Spacer';

export default Spacer;
