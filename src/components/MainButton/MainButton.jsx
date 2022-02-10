import React from 'react';
import styles from './MainButton.styles';

const MainButton = ({ styleBg }) => <button css={styles(styleBg)}> download report </button>;

export default MainButton;
