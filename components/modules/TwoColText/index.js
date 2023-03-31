import PropTypes from 'prop-types';
import css from './style.module.scss';


const TwoColText = ({
  children,
  mainHeading,
  col1paragraph1,
  col1paragraph2,
  col1paragraph3,
  col1heading,
  col2paragraph1,
  col2paragraph2,
  col2paragraph3,
  col2heading,
  bgColor,
}) => {
  return (
    <section className={css.twoColText} style={!!bgColor ? { background: bgColor } : null }>
      <div className={css.mainHeading}>
      {!!mainHeading && <h2>{mainHeading}</h2>}
      </div>
      <div className={css.inner}>
        <div className={css.col}>
          {!!col1heading && <h2>{col1heading}</h2>}
          {!!col1paragraph1 && <p>{col1paragraph1}</p>}
          {!!col1paragraph2 && <p>{col1paragraph2}</p>}
          {!!col1paragraph3 && <p>{col1paragraph3}</p>}
        </div>
        <div className={css.col} >
          {!!col2heading && <h2>{col2heading}</h2>}
          {!!col2paragraph1 && <p>{col2paragraph1}</p>}
          {!!col2paragraph2 && <p>{col2paragraph2}</p>}
          {!!col2paragraph3 && <p>{col2paragraph3}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

TwoColText.propTypes = {
  children: PropTypes.any,
  mainHeading: PropTypes.string,
  col1paragraph1: PropTypes.string,
  col1paragraph2: PropTypes.string,
  col1paragraph3: PropTypes.string,
  col2paragraph1: PropTypes.string,
  col2paragraph2: PropTypes.string,
  col2paragraph3: PropTypes.string,
  col1heading: PropTypes.string,
  col2heading: PropTypes.string,
  image: PropTypes.string,
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,

  direction: PropTypes.string,
};

TwoColText.defaultProps = {
  children: null,
  mainHeading: null,
  col1paragraph1: null,
  col1paragraph2: null,
  col1paragraph3: null,
  col2paragraph1: null,
  col2paragraph2: null,
  col2paragraph3: null,
  heading: null,
  image: null,
  bgImage: null,
  bgColor: null,
  direction: null,
};

export default TwoColText;
