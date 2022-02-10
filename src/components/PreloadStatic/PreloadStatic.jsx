import React from 'react';
import { Helmet } from 'react-helmet';

const PreloadStatic = () => (
  <Helmet>
    <link rel="preload" as="image" href="ADD_YOUR_IMAGES_URL_PATH" />
  </Helmet>
);

export default PreloadStatic;
