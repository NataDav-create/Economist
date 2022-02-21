import { Link } from 'gatsby';
import React, {useState} from 'react';

import styles from './SideMenu.styles';

const SideMenu = ({ image, alt, menuData, futureMenuData }) => {
  const [open, setOpen] = useState(true);

  return (
    <div css={styles(open)}>
      <nav className="menu-nav">
        <div className="menu-top">
          Articles Index
          <img className="menu-top-img" src={image} alt={alt} onClick={() => setOpen(!open)} />
        </div>
        <ul className={`menu-list`}>
          {menuData.map((item, index) => (
            <li key={index} className="menu-item">
              <Link to={item.link} className="menu-link" activeClassName="active">
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
              <span className="menu-date">available on {item.date}</span>
            </li>
          ))}
        </ul>
        <button className="menu-bottom" onClick={() => setOpen(!open)}>
          <img className="menu-bottom-img" src={image} alt={alt} />
        </button>
      </nav>
    </div>
  );
};

export default SideMenu;
