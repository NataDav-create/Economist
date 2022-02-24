import FootEconSec from '@economist/fabric-components/footer/footeconsec/FootEconSec';
import HeadAdv from '@economist/fabric-components/header/headadv/HeadAdv';
import HeadImpact from '@economist/fabric-components/header/headimpact/HeadImpact';
import ScrollDepth from '@economist/fabric-components/utility/ScrollDepthTracker/ScrollDepth';
import UtilWebVitals from '@economist/fabric-components/utility/utilwebvitals/UtilWebVitals';
import React, { useEffect } from 'react';

import { appendAdditionalScripts } from '../../utils/utils/cookiesConsent';
import { PreloadStatic } from '../PreloadStatic';
import { Seo } from '../Seo';
import styles from './Layout.styles';

import '../../styles/normalize.css';
import '../../fonts/fonts.css';

const Layout = ({ children, title, description, image }) => {
  useEffect(() => {
    const [script, script2] = appendAdditionalScripts();

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);

  const sponsorsList = [
    {
      sponsorLogo: '/images/HomePage/logo.png',
      sponsorName: 'World Gold Council',
      sponsorLink: 'https://www.economist.com/',
    },
  ];

  return (
    <>
      <UtilWebVitals />
      <ScrollDepth />
      <Seo title={title} description={description} image={image} /> <PreloadStatic />
      <div css={styles}>
        <div>
          <HeadImpact />
        </div>
        <div className="headadv-container">
          <HeadAdv sponsors={sponsorsList} sponsoredText="" />
        </div>
        <main className="main"> {children} </main>
        <div className="foot-container">
          <FootEconSec />
        </div>
      </div>
    </>
  );
};

export default Layout;
