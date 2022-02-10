import ScrollDepth from '@economist/fabric-components/utility/ScrollDepthTracker/ScrollDepth';
import UtilWebVitals from '@economist/fabric-components/utility/utilwebvitals/UtilWebVitals';
import React, { useEffect } from 'react';

import { appendAdditionalScripts } from '../../utils/utils/cookiesConsent';
import { PreloadStatic } from '../PreloadStatic';
import { Seo } from '../Seo';
import styles from './Layout.styles';

import '../../styles/normalize.css';
import '../../fonts/fonts.css';

/**
 * @param children - used as content for layout
 * @param title - used as property for Seo component
 * @param description - used as property for Seo component
 * @param image - used as property for Seo component
 * @returns {JSX.Element}
 * @constructor
 */

const Layout = ({ children, title, description, image }) => {
  useEffect(() => {
    const [script, script2] = appendAdditionalScripts();

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <UtilWebVitals />
      <ScrollDepth />
      <Seo title={title} description={description} image={image} />
      <PreloadStatic />
      <div css={styles}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
