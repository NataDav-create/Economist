import React from 'react';

import styles from './DownloadButton.styles';

const DownloadButton = ({ styleBg, arrowDown }) => (
  <div css={styles(styleBg, arrowDown)} className="button-wrapper">
    <button className="download-btn">download report</button>
  </div>
);

export default DownloadButton;