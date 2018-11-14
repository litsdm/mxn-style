import React from 'react';
import shapes from '@shapes';
import styles from './Content.scss';

import { products } from '@fixtures';

import DesignerCard from './DesignerCard';
import Category from '../Category';
import Banner from '../Banner';

const { userShape } = shapes;

const Content = ({ user }) => (
  <div className={styles.container}>
    <DesignerCard user={user} />
    <Category addPadding title="Invierno 2018" products={products} />
    <Banner
      textView={{ text: 'dis is test my friend', color: '#fff', display: true }}
      backgroundImage="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-709620.jpg"
      substractMargin={48}
      accentColor="rgb(255, 87, 34)"
      primary={{ text: 'Primary Button', url: 'https://alpha.wallhaven.cc/wallpaper/709620', display: true }}
      secondary={{ text: 'Secondary Button', url: 'https://alpha.wallhaven.cc/wallpaper/709620', display: true }}
    />
  </div>
);

Content.propTypes = {
  user: userShape.isRequired
};

export default Content;
