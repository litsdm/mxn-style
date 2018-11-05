import React from 'react';
import styles from './Header.scss';

import TopBar from '../TopBar';

const Header = () => (
  <div className={styles.container}>
    <TopBar transparent />
  </div>
);

export default Header;
