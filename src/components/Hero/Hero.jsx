import UtilSocShare from '@economist/fabric-components/utility/utilsocshare/UtilSocShare';
import React from 'react';

import { colors } from '../../styles';
import { DownloadButton } from '../DownloadButton';
import styles from './Hero.style';

const Hero = ({ data, assets }) => {
  const { title, backgroundImage } = data;

  return (
    <div css={styles(backgroundImage)}>
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
