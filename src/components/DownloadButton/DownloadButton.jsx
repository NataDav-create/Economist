import React from 'react';

import styles from './DownloadButton.styles';

const DownloadButton = ({ data: {styleBack = '', arrowWh} = {}, styleBg, arrowDown, arrowWhite }) => (
    <div css={styles(styleBack, styleBg, arrowDown, arrowWhite, arrowWh)} className="button-wrapper">
      <button className="download-btn">download report</button>
    </div>
  );

export default DownloadButton;
