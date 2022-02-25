import { Link } from 'gatsby';
import { withPrefix } from 'gatsby-link';
import React from 'react';

import styles from './MobileMenu.styles';

const MobileMenu = ({isOpen, toggleOpen, menuData, futureMenuData}) => (
    <div css={styles(isOpen)}>
      <button className="close-button" onClick={toggleOpen}>
        <div className="closeEl row-1" />
        <div className="closeEl row-2" />
      </button>
      <nav className="mobile-nav">
        <ul className={`mobile-menu-list`}>
          {menuData.map((item, index) => (
            <li key={index} className="menu-item" onClick={toggleOpen}>
              <Link to={withPrefix(item.link)} className="menu-link" activeClassName="active">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="gold-divider"></div>
        <ul className="menu-list-second">
          {futureMenuData.map((item, index) => (
            <li key={index} className="menu-item">
              {item.futureTitle}
              <span className="menu-date"> available on {item.date}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

export default MobileMenu;
