import PropTypes from 'prop-types';
import css from './style.module.scss';

const Text = ({
  children,
  paragraph,
  header,
  maxwidth,
  paragraphMaxwidth,
  headTextColor,
  id,
  className,
}) => {
  return (
    <div id={id} className={css.text}>
      <div className={`${css.inner} ${className}`} style={!!maxwidth ? {maxWidth: maxwidth} : null }>
        <div className={css.TextContainer} style={!!paragraphMaxwidth ? {maxWidth: paragraphMaxwidth} : null }>
        <h2 style={!!headTextColor ? {color: headTextColor} : null }>{header}</h2>
        <p>{paragraph}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

Text.propTypes = {
  children: PropTypes.any,
  paragraph: PropTypes.string,
  headTextColor: PropTypes.string,
  header: PropTypes.string,
  maxwidth: PropTypes.string,
  paragraphMaxwidth: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  paragraph: null,
  headTextColor: null,
  paragraphMaxwidth: null,
  header: null,
  maxwidth: null,
  id: null,
  className: null,

};

export default Text;
