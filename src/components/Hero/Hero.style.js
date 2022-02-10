import { css } from '@emotion/react';
import colors from '../../styles/colors';
import mainBg from '../../../public/images/main-bg.png';
import { Lexia } from '../../styles/fonts';

const styles = () => css`
  background-color: ${colors.bgWhite};
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .container {
    max-width: 1440px;
    padding: 0 32px;
    margin: 0 auto;
  }

  .content-inner {
    display: flex;
    justify-content: center;
    padding: 52px 0 0;
  }
  .social-inner {
    margin-right: 80px;
    div {
      border: none;
    }
  }

  .content-text {
    width: 800px;
  }

  .content-title,
  .content-secondTitle {
    padding: 0;
    margin: 0 0 7px;
    color: ${colors.gold};
    ${Lexia};
    font-size: 42px;
    line-height: 56px;
    font-style: italic;
    font-weight: 500;
  }

  .content-secondTitle {
    margin: 0;
  }

  .bg-inner {
    width: 100%;
    min-height: 450px;
    background-image: url(${mainBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default styles;
