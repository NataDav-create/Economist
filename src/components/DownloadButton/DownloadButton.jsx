import React from 'react';

import styles from './DownloadButton.styles';

const DownloadButton = ({ styleBg, arrowDown }) => (
  <div className="button-wrapper">
    <button css={styles(styleBg, arrowDown)}> download report</button>
  </div>
);

export default DownloadButton;
