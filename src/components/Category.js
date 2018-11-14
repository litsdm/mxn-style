import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import { arrayOf, bool, number, string } from 'prop-types';
import shapes from '@shapes';
import styles from './Category.scss';

import Product from './Product';

const { productShape } = shapes;

const PRODUCTS_PER_ROW = 4;

const Category = ({ addPadding, title, showUrl, isCarousel, rows, products }) => {
  const maxItems = rows * PRODUCTS_PER_ROW;

  const renderCarousel = () => {

  }

  const renderDefault = () => {
    const renderAmount = products.length > maxItems ? maxItems : products.length;
    const productElements = [];

    for (let i = 0; i < renderAmount; i += 1) {
      const product = products[i];
      productElements.push(<Product key={uuid()} {...product} inverse={i % 2 === 0} />)
    }

    return (
      <div className={styles.default}>
        {productElements}
      </div>
    );
  }

  return (
    <div className={styles.container} style={addPadding ? { padding: '0 48px' } : {}}>
      <Link to={showUrl || '#'} className={styles.showAll} style={showUrl ? { cursor: 'default' } : {}}>
        <p className={styles.title}>
          {title}
        </p>
        <p className={styles.expand}>
          Mostrar todo
          <i className={`${styles.expandIcon} fa fa-angle-right`} />
        </p>
      </Link>
      {
        isCarousel && products.length > maxItems
          ? renderCarousel()
          : renderDefault()
      }
    </div>
  );
};

Category.propTypes = {
  addPadding: bool,
  title: string.isRequired,
  showUrl: string,
  isCarousel: bool,
  rows: number,
  products: arrayOf(productShape).isRequired
};

Category.defaultProps = {
  addPadding: false,
  showUrl: null,
  isCarousel: false,
  rows: 1
};

export default Category
