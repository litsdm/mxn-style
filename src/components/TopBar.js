import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import styles from './TopBar.scss';

const TopBar = ({ transparent, display }) => (
  <div
    className={transparent ? styles.navTransparent : styles.nav}
    style={{ opacity: display ? 1 : 0 }}
  >
    <div className={styles.left}>
      <Link to="/">
        Mexican Style
      </Link>
    </div>
    <div className={styles.right}>
      <Link to="#">
        New Arrivals
      </Link>
      <Link to="#">
        Hombres
      </Link>
      <Link to="#">
        Mujeres
      </Link>
      <div className={styles.divider} />
      <Link to="/register">
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
