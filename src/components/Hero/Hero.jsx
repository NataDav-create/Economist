import UtilSocShare from '@economist/fabric-components/utility/utilsocshare/UtilSocShare';
import React, { useState } from 'react';

import { colors } from '../../styles';
import { DownloadButton } from '../DownloadButton';
import { MobileMenu } from '../MobileMenu';
import { MobileMenuBtn } from '../MobileMenuBtn';
import styles from './Hero.style';

const Hero = ({ data, assets, menuData, futureMenuData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if(typeof window !== 'undefined'){
      if(!isOpen) {
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
        window.scroll(0, 0);
      } else if(isOpen){
        document.body.style.height = 'auto';
        document.body.style.overflow = '';
      }
    }
  };
  const { title, backgroundImage } = data;

  return (
    <div css={styles(backgroundImage)}>
      <MobileMenu isOpen={isOpen} toggleOpen={toggleOpen} menuData={menuData} futureMenuData={futureMenuData} />
      <MobileMenuBtn toggleOpen={toggleOpen} />
      <div className="container">
        <div className="content-inner">
          <div className="social-inner">
            <UtilSocShare hoverBase={colors.gold} hoverIcon={colors.white} />
          </div>
          <div className="content-text">
            <h1 className="content-title" dangerouslySetInnerHTML={{ __html: title }} />
            <DownloadButton arrowDown={assets.arrowDown} className="main-btn" styleBg={'primary'} />
          </div>
        </div>
        <div className="bg-inner" />
        <div className="social-mobile">
          <UtilSocShare isVertical={false} hasBorder={false} hoverBase={colors.gold} hoverIcon={colors.white} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
