import React from 'react';
import uuid from 'uuid/v4';
import shapes from 'shapes';
import styles from './Content.module.scss';

import DesignerCard from './DesignerCard';
import Category from '../Category';
import Banner from '../Banner';

const { userShape } = shapes;

const Content = ({ user }) => {
  const renderContent = () =>
    user.content.map(({ type, ...rest }) => {
      const { accentColor } = user.stylesheet;
      if (type === 'category')
        return <Category key={uuid()} addPadding {...rest} accentColor={accentColor} />

      return (
        <Banner key={uuid()} accentColor={accentColor} {...rest} />
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
