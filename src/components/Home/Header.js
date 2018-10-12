import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.container}>
    <div className={styles.nav}>
      <div className={styles.left}>
        <p>
          Mexican Style
        </p>
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
        <Link to="#">
          Registro Diseñador
        </Link>
        <Link to="/cart">
          <i className="fa fa-shopping-cart" />
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
