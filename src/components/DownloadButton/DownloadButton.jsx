import React from 'react';

import styles from './DownloadButton.styles';

const DownloadButton = ({ styleBg, arrowDown }) => <button css={styles(styleBg, arrowDown)}> download report </button>;

export default DownloadButton;
