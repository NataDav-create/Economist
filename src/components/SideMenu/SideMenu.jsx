import React from 'react';

import styles from './SideMenu.styles';

const SideMenu = ({ image, alt }) => (
  <div css={styles}>
    <nav className="menu-nav">
      <div className="menu-top">
        Articles Index
        <img className="menu-top-img" src={image} alt={alt} />
      </div>
      <ul className="menu-list">
        <li className="menu-item">
          <a className="menu-link" href={'#'}>
            Article 1
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href={'#'}>
            Article 2
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href={'#'}>
            Article 3
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href={'#'}>
            Article 4
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href={'#'}>
            Article 5
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideMenu;
