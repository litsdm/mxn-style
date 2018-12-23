import React from 'react';
import { func, string } from 'prop-types';
import styles from './Controls.module.scss';

const Controls = ({ position, setState }) => (
  <div className={styles.controls}>
    <button
      type="button"
      className={`${styles.posControlLeft} ${position === 'left' ? styles.active: {}}`}
      onClick={() => setState({ settingsPos: 'left' })}
    >
      <i className="far fa-window-maximize" />
    </button>
    <button
      type="button"
      className={`${styles.posControlDown} ${position === 'down' ? styles.active: {}}`}
      onClick={() => setState({ settingsPos: 'down' })}
    >
      <i className="far fa-window-maximize" />
    </button>
    <button
      type="button"
      className={`${styles.posControlRight} ${position === 'right' ? styles.active: {}}`}
      onClick={() => setState({ settingsPos: 'right' })}
    >
      <i className="far fa-window-maximize" />
    </button>
    <div className={styles.horizontalDivider} />
    <button type="button" className={styles.close} onClick={() => setState({ displaySettings: false })}>
      <i className="fa fa-times" />
    </button>
  </div>
);

Controls.propTypes = {
  setState: func.isRequired,
  position: string.isRequired
}

export default Controls;
