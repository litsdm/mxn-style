import React from 'react';
import { number } from 'prop-types';
import styles from './ProgressCircles.module.scss';

const ProgressCircles = ({ progress }) => {
  const getCircleClass = (index) => {
    const shared = styles.circle;
    if (index === progress) return `${shared} ${styles.active}`;
    if (index < progress) return `${shared} ${styles.done}`;

    return shared;
  };

  return (
    <div className={styles.container}>
      <div className={getCircleClass(0)}>
        <div>
          <i className="fa fa-check" />
          <p>1</p>
        </div>
      </div>
      <div className={styles.bar} style={progress > 0 ? { backgroundColor: '#7C4DFF' } : {}} />
      <div className={getCircleClass(1)}>
        <div>
          <i className="fa fa-check" />
          <p>2</p>
        </div>
      </div>
      <div className={styles.bar} style={progress > 1 ? { backgroundColor: '#7C4DFF' } : {}} />
      <div className={getCircleClass(2)}>
        <div>
          <i className="fa fa-check" />
          <p>3</p>
        </div>
      </div>
      <div className={styles.bar} style={progress > 2 ? { backgroundColor: '#7C4DFF' } : {}} />
      <div className={getCircleClass(3)}>
        <div>
          <i className="fa fa-check" />
          <p>4</p>
        </div>
      </div>
    </div>
  );
};

ProgressCircles.propTypes = {
  progress: number.isRequired
};

export default ProgressCircles;
