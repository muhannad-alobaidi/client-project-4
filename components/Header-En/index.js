/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Spin as Hamburger } from 'hamburger-react';
import { motion, MotionConfig } from 'framer-motion';
import useMeasure from 'react-use-measure';


import css from './style.module.scss';

const HeaderEn = ({
  className,
}) => {
  const router = useRouter();
  const [scrollTop, setScrollTop] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [ref, { height }] = useMeasure();
  const dropdown = useRef(null);


  const closeMenu = () => {
    setOpen(false);
  };




  const onScroll = () => {
    const windScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled  = (windScroll / height) * 100;

    setScrollTop(scrolled);

  };

  // menu toggle handler 

  useEffect(() => {
    router.events.on('hashChangeStart', closeMenu);

    return () => router.events.off('hashChangeStart', closeMenu);

  },[router.events]);



  // scroll bar handler 

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  },[scrollTop]);

  return (
    <MotionConfig transition={{duration: .5 }}>
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logo}>
        <Image
            src= '/images/DNA_Logo.svg'
            alt="Landscape picture"
            width={75}
            height={75}
          />
        </div>
        <div className={css.scrollProgressBarContainer}>
            <div className={css.progressBar}>

            <div className={css.bar} style={{width: `${scrollTop}%`}}></div>

            </div>
        </div>
        <div className={css.navMenu}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <motion.div ref={dropdown} animate={{height}} className={css.menuItem}  style={!!isOpen  && {paddingBottom: '100px'}}>
      {isOpen && 
        <div ref={ref} className={css.sectionsContainer}>
          <div className={css.section}>
            <div className={css.content}>
              <div className={css.sectionTitle}>
                <h4>Digital evolution – or revolution?</h4>
              </div>
              <div className={css.underline}></div>
              <div className={css.sectionLinks}>
                <Link href='/teknologiatrendit2023/en#tekoäly' onClick={closeMenu}>AI like a second-grader</Link>
                <Link href='/teknologiatrendit2023/en#Kunedes' onClick={closeMenu}>When even the supercomputer is not enough</Link>
                <Link href='/teknologiatrendit2023/en#Synteettinen' onClick={closeMenu}>A synthetic brush creates art from words</Link>
                <Link href='/teknologiatrendit2023/en#Älyoptiikka' onClick={closeMenu}>Smart optics enhance performance in sports</Link>
                <Link href='/teknologiatrendit2023/en#Koodikielien' onClick={closeMenu}>The retirees of programming languages</Link>
              </div>
            </div>
          </div>
          <div className={css.section}>
            <div className={css.content}>
              <div className={css.sectionTitle}>
                <h4>Consume less, achieve more</h4>
              </div>
              <div className={css.underline}></div>
              <div className={css.sectionLinks}>
                <Link href='/teknologiatrendit2023/en#Oikeus' onClick={closeMenu}>The right to repair and the responsibility to rent?</Link>
                <Link href='/teknologiatrendit2023/en#Sähkön' onClick={closeMenu}>Tightening the budget on energy consumption</Link>
                <Link href='/teknologiatrendit2023/en#USB' onClick={closeMenu}>USB-C is finally mainstream – also legally</Link>
                <Link href='/teknologiatrendit2023/en#Pilvisellä' onClick={closeMenu}>The electric car could take care of the power needs of your cabin</Link>
              </div>
            </div>
          </div>
          <div className={css.section}>
            <div className={css.content}>
              <div className={css.sectionTitle}>
                <h4>Cybersecurity and economy: new impetus</h4>
              </div>
              <div className={css.underline}></div>
              <div className={css.sectionLinks}>
                <Link href='/teknologiatrendit2023/en#IoT' onClick={closeMenu}>IoT data security and zero trust</Link>
                <Link href='/teknologiatrendit2023/en#Biometriset' onClick={closeMenu}>Biometric verification to surpass passwords</Link>
                <Link href='/teknologiatrendit2023/en#Teknologia' onClick={closeMenu}>Ordeals in the tech industry and the puzzle of a sustainable business model</Link>
                <Link href='/teknologiatrendit2023/en#Tilaustalous' onClick={closeMenu}>Subscription economy: more features for a fee</Link>
              </div>
            </div>
          </div>
          <div className={css.section}>
            <div className={css.content}>
              <div className={css.sectionTitle}>
                <h4>The forces and counterforces of digital life</h4>
              </div>
              <div className={css.underline}></div>
              <div className={css.sectionLinks}>
                <Link href='/teknologiatrendit2023/en#Kiillotetun' onClick={closeMenu}>Beyond polished reality</Link>
                <Link href='/teknologiatrendit2023/en#Pukeutuisitko' onClick={closeMenu}>Would you wear virtual Gucci?</Link>
                <Link href='/teknologiatrendit2023/en#Luo' onClick={closeMenu}>Create, play and remix</Link>
                <Link href='/teknologiatrendit2023/en#Mitä' onClick={closeMenu}>What wine would you recommend with my 3D-printed veggie steak?</Link>
              </div>
            </div>
          </div>
        </div>
       }
       </motion.div>
    </header>
    </MotionConfig>
  );
};

HeaderEn.propTypes = {
  className: PropTypes.string,
};
HeaderEn.defaultProps = {
  className: null,
};

HeaderEn.displayName = 'HeaderEn';

export default HeaderEn;
