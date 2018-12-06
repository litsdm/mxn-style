import React from 'react';
import shapes from 'shapes';
import styles from './Header.scss';

import TopBar from '../TopBar';

const { stylesheetShape } = shapes;

const Header = ({ stylesheet: { bgColor, bgImage } }) => (
  <div className={styles.container} style={{ backgroundImage: `url(${bgImage})`, backgroundColor: bgColor }}>
    <TopBar transparent />
  </div>
);

Header.propTypes = {
  stylesheet: stylesheetShape.isRequired
};

export default Header;
