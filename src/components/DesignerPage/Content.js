import React from 'react';
import uuid from 'uuid/v4';
import shapes from '@shapes';
import styles from './Content.scss';

import DesignerCard from './DesignerCard';
import Category from '../Category';
import Banner from '../Banner';

const { userShape } = shapes;

const Content = ({ user }) => {
  const renderContent = () =>
    user.content.map(({ type, products, title, textView, backgroundImage, primary, secondary }) => {
      const { accentColor } = user.stylesheet;
      if (type === 'category')
        return <Category key={uuid()} addPadding title={title} products={products} accentColor={accentColor} />

      return (
        <Banner
          key={uuid()}
          textView={textView}
          backgroundImage={backgroundImage}
          substractMargin={48}
          accentColor={accentColor}
          primary={primary}
          secondary={secondary}
        />
      )
    })

  return (
    <div className={styles.container}>
      <DesignerCard user={user} />
      {renderContent()}
    </div>
  );
};

Content.propTypes = {
  user: userShape.isRequired
};

export default Content;
