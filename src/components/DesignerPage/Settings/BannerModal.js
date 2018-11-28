import React from 'react';
import { string } from 'prop-types';

import Modal from '@components/Modal';

import styles from './BannerModal.scss';

const BannerModal = ({ id, title }) => (
  <Modal id={id} title={title}>
    <div className={styles.content}>
      Banner Modal
    </div>
  </Modal>
);

BannerModal.propTypes = {
  id: string.isRequired,
  title: string,
};

BannerModal.defaultProps = {
  title: ''
};

export default BannerModal;
