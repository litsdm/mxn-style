import React from 'react';
import { func, string } from 'prop-types';
import styles from './styles.scss';

const ComingSoon = ({ email, handleChange, subscribe }) => (
  <div className={styles.container}>
    <p className={styles.brandName}>
      Mexican Style
    </p>
    <div className={styles.subscribeWrapper}>
      <label htmlFor="comingSoonInput" className={styles.label}>
        Email
        <input id="comingSoonInput" type="email" name="email" value={email} onChange={handleChange} />
      </label>
      <button type="button" className={styles.subscribe} onClick={subscribe}>
        Subscribete!
      </button>
    </div>
  </div>
);

ComingSoon.propTypes = {
  email: string.isRequired,
  handleChange: func.isRequired,
  subscribe: func.isRequired
};

export default ComingSoon;
