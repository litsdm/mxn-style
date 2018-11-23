import React from 'react';

import Modal from '@components/Modal';

import styles from './BannerModal.scss';

const BannerModal = () => (
  <Modal>
    <div className={styles.content}>
      Banner Modal
    </div>
  </Modal>
);

export default BannerModal;
