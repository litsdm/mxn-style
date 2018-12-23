import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import { arrayOf, bool, number, string } from 'prop-types';
import shapes from 'shapes';
import styles from './Category.module.scss';

import Product from './Product';

const { productShape } = shapes;

const PRODUCTS_PER_ROW = 4;
const HORIZONTAL_LIST_ID = uuid();

const Category = ({ addPadding, title, showUrl, isCarousel, rows, products, accentColor }) => {
  const maxItems = rows * PRODUCTS_PER_ROW;

  const handleScroll = (direction) => () => {
    const element = document.getElementById(HORIZONTAL_LIST_ID);
    const scrollPixels = 252;

    if (!element) return;

    console.log(element.scrollLeft);
    if (direction === 'right') element.scrollLeft += scrollPixels;
    else element.scrollLeft -= scrollPixels;
  }

  const renderCarousel = () => {
    const productElements = products.map((product, index) => (
      <div key={uuid()} className={styles.productWrapper} style={index === 0 ? { marginLeft: '48px' } : {}}>
        <Product {...product} inverse={index % 2 === 0} accentColor={accentColor} />
      </div>
    ));

    return (
      <div className={styles.carousel}>
        <button type="button" className={styles.rightButton} onClick={handleScroll('right')}>
          <i className="fa fa-angle-right" />
        </button>
        <button type="button" className={styles.leftButton} onClick={handleScroll('left')}>
          <i className="fa fa-angle-left" />
        </button>
        <div className={styles.horizontalList} id={HORIZONTAL_LIST_ID}>
          {productElements}
        </div>
      </div>
    )
  }

  const renderDefault = () => {
    const renderAmount = products.length > maxItems ? maxItems : products.length;
    const productElements = [];

    for (let i = 0; i < renderAmount; i += 1) {
      const product = products[i];
      productElements.push(<Product key={uuid()} {...product} inverse={i % 2 === 0} accentColor={accentColor} />)
    }

    return (
      <div className={styles.default} style={addPadding ? { padding: '0 48px' } : {}}>
        {productElements}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to={showUrl || '#'} className={styles.showAll} style={addPadding ? { padding: '0 48px' } : {}}>
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
  accentColor: string,
  addPadding: bool,
  title: string.isRequired,
  showUrl: string,
  isCarousel: bool,
  rows: number,
  products: arrayOf(productShape).isRequired
};

Category.defaultProps = {
  accentColor: '#512DA8',
  addPadding: false,
  showUrl: null,
  isCarousel: false,
  rows: 1
};

export default Category
