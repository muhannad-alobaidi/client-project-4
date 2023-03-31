/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import css from './style.module.scss';

const Footer = ({
  className,
  width,
  height,
  more,
  link1,
  link2,
  logo,
}) => {
  return (
    <footer className={css.footer}>
      <div className={css.links}>
        <h2>{more}</h2>
        {!!link1 && <a href="https://www.dna.fi/yrityksille/yllattavan-yksinkertaista-podcast" target='blanck'>{link1}</a>}
        {!!link2 && <a href="https://www.dna.fi/yrityksille/kaikki-ratkaisut" target='blanck'>{link2}</a>}
      </div>
      <div className={css.logo}>
        <a href="https://www.dna.fi/dnabusiness" target='blanck'><Image src={logo} alt="logo" width={width} height={height} /></a>
        
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  more: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  logo: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
Footer.defaultProps = {
  className: null,
  more: null,
  link1: null,
  link2: null,
  logo: null,
  width: null,
  height: null,
};

Footer.displayName = 'Footer';

export default Footer;
