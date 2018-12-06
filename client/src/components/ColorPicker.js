import React from 'react';
import uuid from 'uuid/v4';
import { func, string } from 'prop-types';
import styles from './ColorPicker.scss';

import { colors } from 'fixtures';

const ColorPicker = ({ setStylesheet, property }) => {
  const renderColors = () => colors.map(color => (
    <button
      key={uuid()}
      type="button"
      className={styles.color}
      style={{ backgroundColor: color }}
      onClick={() => setStylesheet({ [property]: color })}
    />
  ));

  return (
    <div className={styles.container}>
      {renderColors()}
    </div>
  );
};

ColorPicker.propTypes = {
  setStylesheet: func.isRequired,
  property: string.isRequired
};

export default ColorPicker;
