import PropTypes from 'prop-types';
import Image from 'next/image';
import css from './style.module.scss';

const Hero = ({
  heading,
  paragraph,
  bgImageUrl,
  bgVeilColor,
  children,
  textColor,
}) => {
  return (
    <section className={css.hero} style={!!bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` }: null}>
      {/* <div className={css.background} style={!!bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : null} />
      {!!bgVeilColor && (
        <div className={css.backgroundveil} style={{ backgroundColor: bgVeilColor }} />
      )} */}
       <video autoPlay muted src="https://preview.dev.sek.fi/dna/teknologiatrendit23/dna_teknologiatrendit_4.mp4"></video>
      <div className={css.content}>   
        <div className={css.inner}>
          {!!heading && <h1>{heading}</h1>}
          {!!paragraph && <p>{paragraph}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  bgImageUrl: PropTypes.string,
  bgVeilColor: PropTypes.string,
  children: PropTypes.any,
  textColor: PropTypes.string,
};

Hero.defaultProps = {
  heading: null,
  bgImageUrl: null,
  bgVeilColor: null,
  children: null,
  textColor: null,
};

export default Hero;
