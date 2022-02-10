import UtilSocShare from '@economist/fabric-components/utility/utilsocshare/UtilSocShare';
import React from 'react';

import { DownloadButton } from '../DownloadButton';
import styles from './Hero.style';

const Hero = ({ data, common }) => {
  const { title, backgroundImage } = data;
  const { arrowDown } = common;

  return (
    <div css={styles(backgroundImage)}>
      <div className="container">
        <div className="content-inner">
          <div className="social-inner">
            <UtilSocShare />
          </div>
          <div className="content-text">
            <h1 className="content-title" dangerouslySetInnerHTML={{ __html: title }} />
            <DownloadButton arrowDown={arrowDown} className="main-btn" styleBg={'primary'} />
          </div>
        </div>
        <div className="bg-inner" />
      </div>
    </div>
  );
};

export default Hero;
