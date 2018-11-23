import React from 'react';
import { string } from 'prop-types';
import shapes from '@shapes';
import styles from './Modal.scss';

const { childrenShape } = shapes;

const Modal = ({ id, children, title }) => {
  const closeModal = () => {
    const element = document.getElementById(id);
    if (!element) return;
    element.style.display = 'none';
  }

  return (
    <div className={styles.container} id={id}>
      <div
        className={styles.overlay}
        onClick={closeModal}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
      />
      <div className={styles.modal}>
        <div className={styles.header}>
          <p className={styles.title}>
            {title}
          </p>
          <button type="button" onClick={closeModal} className={styles.close}>
            <i className="fa fa-times" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: childrenShape.isRequired,
  id: string.isRequired,
  title: string
};

Modal.defaultProps = {
  title: ''
};

export default Modal;
