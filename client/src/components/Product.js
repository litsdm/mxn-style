import React from 'react';
import { Link } from 'react-router-dom';
import { bool, number, string, shape } from 'prop-types';
import styles from './Product.scss';

const Product = ({ thumbnail, name, price, designer, inverse, accentColor }) => (
  <div className={styles.container}>
    <img className={styles.thumbnail} src={thumbnail} alt={`Producto ${name} por ${designer.name}`} />
    <div className={inverse ? styles.curvedDivInverse : styles.curvedDiv} />
    <div className={styles.info}>
      <div className={styles.names}>
        <p className={styles.productName}>
          {name}
        </p>
        <Link to={`/designer/${designer._id}`} className={styles.designerName}>
          {`por ${designer.name}`}
        </Link>
      </div>
      <span className={styles.price} style={{ color: accentColor }}>
        <p className={styles.sign}>
          $
        </p>
        <p>
          {price}
        </p>
      </span>
    </div>
  </div>
);

Product.propTypes = {
  accentColor: string.isRequired,
  thumbnail: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  designer: shape({ name: string, _id: string }).isRequired,
  inverse: bool.isRequired
}

export default Product;
