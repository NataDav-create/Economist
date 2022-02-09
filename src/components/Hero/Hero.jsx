import React from 'react';
import UtilSocShare from '@economist/fabric-components/utility/utilsocshare/UtilSocShare';
import { MainButton } from '../MainButton';
import styles from './Hero.style';

const Hero = () => (
  <div css={styles}>
    <div className="container">
      <div className="content-inner">
        <div className="social-inner">
          <UtilSocShare />
        </div>
        <div className="content-text">
          <h1 className="content-title">Gold Demand Trends</h1>
          <p className="content-secondTitle">02 2021</p>
          <MainButton />
        </div>
      </div>
      <div className="bg-inner"></div>
    </div>
  </div>
)

export default Hero;
