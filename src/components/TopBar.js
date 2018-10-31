import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import styles from './TopBar.scss';

import DropdownContainer from './DropdownContainer';

import { dropdownCategoryData, dropdownData } from '@fixtures';

const TopBar = ({ transparent, display }) => (
  <div
    className={transparent ? styles.navTransparent : styles.nav}
    style={{ opacity: display ? 1 : 0, zIndex: display ? 10 : -1 }}
  >
    <div className={styles.left}>
      <Link to="/">
        Mexican Style
      </Link>
    </div>
    <div className={styles.right}>
      <DropdownContainer text="New Arrivals" url="/#" data={dropdownCategoryData} />
      <DropdownContainer text="Hombres" url="/#" data={dropdownData} />
      <DropdownContainer text="Mujeres" url="/#" data={dropdownCategoryData} />
      <div className={styles.divider} />
      <Link to="/register" style={{ marginRight: '24px' }}>
        Registro Diseñador
      </Link>
      <Link to="/cart">
        <i className="fa fa-shopping-cart" />
      </Link>
    </div>
  </div>
);

TopBar.propTypes = {
  transparent: bool,
  display: bool
};

TopBar.defaultProps = {
  transparent: false,
  display: true
};

export default TopBar;
