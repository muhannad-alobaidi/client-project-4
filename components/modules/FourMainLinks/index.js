import PropTypes from 'prop-types';
import Link from 'next/link';
import css from './style.module.scss';

const FourMainLinks = ({
  children,
  className,
  link1,
  link2,
  link3,
  link4,
  themes,

}) => {
  return (
    <div className={css.fourMainLinksContainer}>
          <div className={css.teemat}>
            <h4>{themes}</h4>
          </div>
      <div className={`${css.inner} ${className}`}>
          <div className={css.fourMainLinks}>
            <div className={css.mainLink}>
              <Link href='#Digitaalinen'>{link1}</Link>
            </div>
            <div className={css.mainLink}>
              <Link href='#Vastuullisuus'>{link2}</Link>
            </div>
            <div className={css.mainLink}>
              <Link href='#Tietoturva'>{link3}</Link>
            </div>
            <div className={css.mainLink}>
              <Link href='#Digitaalisen'>{link4}</Link>
            </div>
          </div>
        {children}
      </div>
    </div>
  );
};

FourMainLinks.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  themes: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
};

FourMainLinks.defaultProps = {
  children: null,
  className: null,
  themes: null,
  link1: null,
  link2: null,
  link3: null,
  link4: null,

};

export default FourMainLinks;
