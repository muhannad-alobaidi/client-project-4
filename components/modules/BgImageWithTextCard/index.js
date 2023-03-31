import PropTypes from 'prop-types';
import css from './style.module.scss';

const BgImageWithTextCard = ({
  children,
  paragraph1,
  paragraph2,
  header,
  background,
  id,
  className,
}) => {
  return (
    <div id={id} className={css.bgImageWithTextCard}>
      <div className={`${css.inner} ${className}`} >
        <div className={css.bgimage} style={!!background ? {background: `url(${background})`} : null }>
        </div>
        <div className={css.TextContainer}>
        <h2>{header}</h2>
        <p>{paragraph1}</p>
        <p className={css.readingTime}>{paragraph2}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

BgImageWithTextCard.propTypes = {
  children: PropTypes.any,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  header: PropTypes.string,
  background: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

BgImageWithTextCard.defaultProps = {
  children: null,
  paragraph1: null,
  paragraph2: null,
  header: null,
  background: null,
  id: null,
  className: null,

};

export default BgImageWithTextCard;
