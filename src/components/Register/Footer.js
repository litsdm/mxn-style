import React from 'react';
import { func, number } from 'prop-types';
import styles from './Footer.scss';

const Footer = ({ page, handleNext, handleBack, goToPage }) => {
  const nextPage = () => goToPage(page + 1);
  const prevPage = () => goToPage(page - 1);

  return (
    <div className={styles.container} style={{ justifyContent: page > 0 ? 'space-between' : 'flex-end' }}>
      {
        page > 0
          ? (
            <button type="button" onClick={handleBack || prevPage} className={styles.button}>
              <i className="fa fa-long-arrow-alt-left" style={{ marginRight: '6px' }} />
              {' '}
              Back
            </button>
          )
          : null
      }
      <button type="button" onClick={handleNext || nextPage} className={styles.button}>
        Next
        {' '}
        <i className="fa fa-long-arrow-alt-right" style={{ marginLeft: '6px' }} />
      </button>
    </div>
  );
};

Footer.propTypes = {
  page: number.isRequired,
  handleNext: func,
  handleBack: func,
  goToPage: func.isRequired
};

Footer.defaultProps = {
  handleNext: null,
  handleBack: null,
};

export default Footer;
