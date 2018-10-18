import React from 'react';
import styles from './Content.scss';

import Category from '../Category';
import { products } from '@fixtures';

const Content = () => (
  <div className={styles.container}>
    <div className={styles.contentCard}>
      <Category title="Invierno 2018" products={products} />
    </div>
  </div>
);

export default Content;
