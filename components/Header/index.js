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

const Header = ({
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
                <h4>Digitaalinen evoluutio – vai revoluutio?</h4>
              </div>
              <div className={css.underline}></div>
              <div className={css.sectionLinks}>
                <Link href='/teknologiatrendit2023#tekoäly' onClick={closeMenu}>Tekoäly kuin tokaluokkalainen</Link>
                <Link href='/teknologiatrendit2023#Kunedes' onClick={closeMenu}>Kun edes supertietokone ei riitä</Link>
                <Link href='/teknologiatrendit2023#Synteettinen' onClick={closeMenu}>Synteettinen sivellin tekee sanoista taidetta</Link>
                <Link href='/teknologiatrendit2023#Älyoptiikka' onClick={closeMenu}>Älyoptiikka rikastaa urheilusuoritusta</Link>
                <Link href='/teknologiatrendit2023#Koodikielien' onClick={closeMenu}>Koodikielien eläkepäivät</Link>
              </div>
            </div>
          </div>
          <div className={css.section}>
            <div className={css.content}>
              <div className={css.sectionTitle}>
                <h4>Kuluta vähemmän, saavuta enemmän</h4>
              </div>
              <div className={css.underline}></div>
              <div className={css.sectionLinks}>
                <Link href='/teknologiatrendit2023#Oikeus' onClick={closeMenu}>Oikeus korjata ja velvollisuus vuokrata?</Link>
                <Link href='/teknologiatrendit2023#Sähkön' onClick={closeMenu}>Sähkön säästökuuri</Link>
                <Link href='/teknologiatrendit2023#USB' onClick={closeMenu}>USB-C:stä vihdoin valtavirtaa – lain turvin</Link>
                <Link href='/teknologiatrendit2023#Pilvisellä' onClick={closeMenu}>Pilvisellä säällä mökin valot sytyttääkin sähköauto</Link>
              </div>
            </div>
          </div>
          <div className={css.section}>
            <div className={css.content}>
              <div className={css.sectionTitle}>
                <h4>Tietoturva ja talous: uudet (v)aatteet</h4>
              </div>
              <div className={css.underline}></div>
              <div className={css.sectionLinks}>
                <Link href='/teknologiatrendit2023#IoT' onClick={closeMenu}>IoT:n tietoturva ja zero trust</Link>
                <Link href='/teknologiatrendit2023#Biometriset' onClick={closeMenu}>Biometriset tunnisteet syrjäyttävät salasanat</Link>
                <Link href='/teknologiatrendit2023#Teknologia' onClick={closeMenu}>Teknologia-alan koettelemukset ja kestävän bisnesmallin arvoitus</Link>
                <Link href='/teknologiatrendit2023#Tilaustalous' onClick={closeMenu}>Tilaustalous, eli maksusta lisää ominaisuuksia</Link>
              </div>
            </div>
          </div>
          <div className={css.section}>
            <div className={css.content}>
              <div className={css.sectionTitle}>
                <h4>Digitaalisen arjen voimat ja vastavoimat</h4>
              </div>
              <div className={css.underline}></div>
              <div className={css.sectionLinks}>
                <Link href='/teknologiatrendit2023#Kiillotetun' onClick={closeMenu}>Kiillotetun todellisuuden tuolla puolen</Link>
                <Link href='/teknologiatrendit2023#Pukeutuisitko' onClick={closeMenu}>Pukeutuisitko virtuaaliseen Gucciin?</Link>
                <Link href='/teknologiatrendit2023#Luo' onClick={closeMenu}>Luo, pelaa ja remixaa</Link>
                <Link href='/teknologiatrendit2023#Mitä' onClick={closeMenu}>Mitä viiniä suosittelisit 3D-tulostetun kasvispihvini kanssa?</Link>
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

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: null,
};

Header.displayName = 'Header';

export default Header;
