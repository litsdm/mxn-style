import React from 'react';
import { bool } from 'prop-types';
import styles from './Header.module.scss';

import TopBar from '../TopBar';

const Header = ({ fixTopBar }) => (
  <div className={styles.container}>
    <TopBar transparent display={!fixTopBar} />
    <TopBar display={fixTopBar} />
  </div>
);

Header.propTypes = {
  fixTopBar: bool.isRequired
};

export default Header;
