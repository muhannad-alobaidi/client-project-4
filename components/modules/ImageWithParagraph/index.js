/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import PropTypes from 'prop-types';
import css from './style.module.scss';
import { isMobile, isTablet } from 'react-device-detect';
import { useState, useEffect } from 'react';


const ImageWithParagraph = ({
  children,
  id,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  source1,
  source1link,
  source2,
  source2link,
  source3,
  source3link,
  heading,
  bgColor,
  bgImage,
  bgImageMobile,
  direction,
  quot,
  quotee,
  source,
  classNameImage,
}) => {

  const [backgroundImage, setbackgroundImage] = useState(bgImage);

  useEffect(() => {
    if(isMobile || isTablet){
      setbackgroundImage(bgImageMobile);
    }else {
      setbackgroundImage(bgImage);
    }

   
  }, []);

  
  return (
    <section id={id} className={css.imageWithParagraph} style={!!bgColor ? { background: bgColor } : null }>
      <div className={css.inner} style={!!direction ? { direction: direction } : null } >
      <div className={`${css.image} ${classNameImage}`} style={!!bgImage ? { backgroundImage: `url(${backgroundImage})` } : null }  >
        </div>
        <div className={css.text} >
          {!!heading && <h2>{heading}</h2>}
          {!!paragraph1 && <p>{paragraph1}</p>}
          {!!paragraph2 && <p>{paragraph2}</p>}
          {!!paragraph3 && <p>{paragraph3}</p>}
          {!!paragraph4 && <p>{paragraph4}</p>}
          <div className={css.source}>
            <p>{source}</p>
            {!!source1 && <a target="_blank" rel="noopener noreferrer" href={source1link}>{source1}</a>}
            {!!source2 && <a target="_blank" rel="noopener noreferrer" href={source2link}>{source2}</a>}
            {!!source3 && <a target="_blank" rel="noopener noreferrer" href={source3link}>{source3}</a>}
          </div>
          {!!quot && <p className={css.quot}>{quot}</p>}
          {!!quotee && <p className={css.quotee}>{quotee}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

ImageWithParagraph.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  paragraph3: PropTypes.string,
  paragraph4: PropTypes.string,
  source: PropTypes.string,
  source1: PropTypes.string,
  source1link: PropTypes.string,
  source2: PropTypes.string,
  source2link: PropTypes.string,
  source3: PropTypes.string,
  source3link: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.string,
  bgImage: PropTypes.string,
  bgImageMobile: PropTypes.string,
  bgColor: PropTypes.string,
  quot: PropTypes.string,
  quotee: PropTypes.string,
  direction: PropTypes.string,
  classNameImage: PropTypes.string,
};

ImageWithParagraph.defaultProps = {
  children: null,
  id: null,
  paragraph1: null,
  paragraph2: null,
  paragraph3: null,
  paragraph4: null,
  source: null,
  source1: null,
  source2: null,
  source3: null,
  source1link: null,
  source2link: null,
  source3link: null,
  heading: null,
  image: null,
  bgImage: null,
  bgImageMobile: null,
  bgColor: null,
  direction: null,
  quot: null,
  quotee: null,
  classNameImage: null,
};

export default ImageWithParagraph;
