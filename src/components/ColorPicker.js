import React from 'react';
import uuid from 'uuid/v4';
import { func } from 'prop-types';
import styles from './ColorPicker.scss';

import { colors } from '@fixtures';

const ColorPicker = ({ setStylesheet }) => {
  const renderColors = () => colors.map(color => (
    <button
      key={uuid()}
      type="button"
      className={styles.color}
      style={{ backgroundColor: color }}
      onClick={() => setStylesheet({ bgColor: color })}
    />
  ));

  return (
    <div className={styles.container}>
      {renderColors()}
    </div>
  );
};

ColorPicker.propTypes = {
  setStylesheet: func.isRequired
};

export default ColorPicker;
