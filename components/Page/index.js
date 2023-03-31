import PropTypes from 'prop-types';

import css from './style.module.scss';

const Page = ({
  children,
}) => {
  
  return (
    <div className={css.page}>
      <div className={css.content}>
      </div>
      <div className={css.children}>
        {children}
      </div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.any,
};

Page.defaultProps = {
  children: null,
};

export default Page;
