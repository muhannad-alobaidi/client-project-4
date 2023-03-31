/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import css from './style.module.scss';
import { useState } from 'react';
import {motion, MotionConfig, AnimatePresence} from "framer-motion";
import useMeasure from 'react-use-measure';
import { useRouter } from 'next/router';
import Image from 'next/image';

const AreticalWithToggle = ({
  children,
  paragraph1,
  paragraph2,
  paragraph3,
  readingTime,
  heading,
  id,
  bgColor,
  bgImage,
  direction,
  quot,
  quotee,
  classNameImage,
}) => {

  const [articalToggle, setArticalToggle] = useState(false);
  const [ref, { height }] = useMeasure();
  const router = useRouter();
  

  const handelToggle = () => {
     setArticalToggle(!articalToggle);
     const mainPath = router.asPath.split('#')[0];
     router.replace(`${mainPath}#${id}`);
      
  };
  return (
    <MotionConfig transition={{duration: .5 }}>
      <section  className={css.areticalWithToggle} style={!!bgColor ? { background: bgColor } : null }>
      <div className={css.inner} style={!!direction ? { direction: direction } : null } >
        <div className={css.text} >
          {!!heading && <h2>{heading}</h2>}
          {!!paragraph1 && <p>{paragraph1}</p>}
          {!!paragraph2 && <p>{paragraph2}</p>}
          {!!paragraph3 && <p>{paragraph3}</p>}
          {!!quot && <p className={css.quot}>{quot}</p>}
          {!!quotee && <p className={css.quotee}>{quotee}</p>}
        </div>
        <div>
          <div className={`${css.image} ${classNameImage}`}  >
            <Image
            src={bgImage}
            width={600}
            height={600}
            alt='artical'
            />
          </div>
        </div>
      </div>
      <div  id={id} className={css.hiddinArticalContainer}>
        <div className={css.readArtical}>
          <p>{readingTime}</p>
        </div>
        <motion.div 
        className={css.togglebox}
        animate={{height}}
        > 
         <AnimatePresence>
        {articalToggle && <div ref={ref} className={css.showbox} >
        {children}
        </div> }
        </AnimatePresence>
        </motion.div>
        <div className={css.togglebutton}>
          <motion.div 
          animate={{
           y: [10, 8, 10, 8, 10]
          }}
          transition={{  duration: 2, repeat: Infinity  }}
          >
          <motion.button 
            animate={{
              rotate: !articalToggle ? 0 : 180
            }}
              className={css.arrow} 
              onClick={handelToggle}> <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 17.9699C0 16.9495 0.435524 16.2254 1.30657 15.7977C2.176 15.3683 3.01548 15.4393 3.825 16.0107L17 25.5007L30.175 16.0107C30.9845 15.4393 31.8248 15.3683 32.6959 15.7977C33.5653 16.2254 34 16.9495 34 17.9699C34 18.4189 33.8891 18.8271 33.6673 19.1945C33.4439 19.5618 33.1702 19.8679 32.8464 20.1128L18.3964 30.4599C18.194 30.6232 17.9714 30.7456 17.7286 30.8273C17.4857 30.9089 17.2429 30.9497 17 30.9497C16.7571 30.9497 16.5248 30.9089 16.303 30.8273C16.0796 30.7456 15.8464 30.6232 15.6036 30.4599L1.15357 20.1128C0.829762 19.8679 0.556141 19.5618 0.33271 19.1945C0.110901 18.8271 0 18.4189 0 17.9699ZM0 3.39832C0 2.3779 0.435524 1.65381 1.30657 1.22605C2.176 0.796652 3.01548 0.867674 3.825 1.43911L17 10.929L30.175 1.43911C30.9845 0.867674 31.8248 0.796652 32.6959 1.22605C33.5653 1.65381 34 2.3779 34 3.39832C34 3.84731 33.8891 4.25548 33.6673 4.62283C33.4439 4.99018 33.1702 5.29631 32.8464 5.54121L18.3964 15.8883C18.194 16.0515 17.9714 16.174 17.7286 16.2556C17.4857 16.3373 17.2429 16.3781 17 16.3781C16.7571 16.3781 16.5143 16.3373 16.2714 16.2556C16.0286 16.174 15.806 16.0515 15.6036 15.8883L1.15357 5.54121C0.829762 5.29631 0.556141 4.99018 0.33271 4.62283C0.110901 4.25548 0 3.84731 0 3.39832Z" fill="white"/>
              </svg>
                </motion.button>
          </motion.div>
         
        </div>
        
      </div>
    </section>

    </MotionConfig>
    
  );
};

AreticalWithToggle.propTypes = {
  children: PropTypes.any,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  paragraph3: PropTypes.string,
  readingTime: PropTypes.string,
  heading: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  quot: PropTypes.string,
  quotee: PropTypes.string,
  direction: PropTypes.string,
  classNameImage: PropTypes.string,
};

AreticalWithToggle.defaultProps = {
  children: null,
  paragraph1: null,
  paragraph2: null,
  paragraph3: null,
  readingTime: null,
  heading: null,
  id: null,
  image: null,
  bgImage: null,
  bgColor: null,
  direction: null,
  quot: null,
  quotee: null,
  classNameImage: null,
};

export default AreticalWithToggle;
