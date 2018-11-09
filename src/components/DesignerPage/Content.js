import React from 'react';
import shapes from '@shapes';
import styles from './Content.scss';

import { products } from '@fixtures';

import DesignerCard from './DesignerCard';
import Category from '../Category';

const { userShape } = shapes;

const Content = ({ user }) => (
  <div className={styles.container}>
    <DesignerCard user={user} />
    <Category title="Invierno 2018" products={products} />
  </div>
);

Content.propTypes = {
  user: userShape.isRequired
};

export default Content;
