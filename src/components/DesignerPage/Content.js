import React from 'react';
import styles from './Content.scss';

import { products } from '@fixtures';

import DesignerCard from './DesignerCard';
import Category from '../Category';

const Content = () => (
  <div className={styles.container}>
    <DesignerCard />
    <Category title="Invierno 2018" products={products} />
  </div>
);

export default Content;
