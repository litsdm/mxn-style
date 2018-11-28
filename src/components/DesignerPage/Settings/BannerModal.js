import React from 'react';
import { bool, string, shape } from 'prop-types';

import Modal from '@components/Modal';

import styles from './BannerModal.scss';

const BannerModal = ({ id, title, textView, primary, secondary, backgroundImage }) => (
  <Modal id={id} title={title}>
    <div className={styles.content}>
      <div className={styles.row}>
        <div className={styles.sectionLeft}>
          <p className={styles.sectionTitle}>
            Fondo
          </p>
        </div>
        <div className={styles.sectionRight}>
          <div className={styles.imageContainer}>
            <img src={backgroundImage} alt="banner's background" className={styles.bgImage} />
            <label htmlFor="bannerBgImageInput" className={styles.imageLabel}>
              Subir Imagen
              <input
                id="bannerBgImageInput"
                name="bgImage"
                type="file"
                accept="image/*"
              />
            </label>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.row}>
        <div className={styles.sectionLeft}>
          <p className={styles.sectionTitle}>
            Text View
          </p>
        </div>
        <div className={styles.sectionRight}>
          <label htmlFor="textViewDisplayCheck" className={styles.checkboxContainer}>
            <input id="textViewDisplayCheck" type="checkbox" name="display" checked={textView.display} />
            Mostrar Text View
          </label>
          <label htmlFor="textViewTextInput" className={styles.inputContainer}>
            Texto
            <input id="textViewTextInput" type="text" name="text" value={textView.text} />
          </label>
          <label htmlFor="textViewColorInput" className={styles.inputContainer}>
            Color
            <input id="textViewColorInput" type="text" name="color" value={textView.color} />
          </label>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.row}>
        <div className={styles.sectionLeft}>
          <p className={styles.sectionTitle}>
            Boton Primario
          </p>
        </div>
        <div className={styles.sectionRight}>
          <label htmlFor="primaryDisplayCheck" className={styles.checkboxContainer}>
            <input id="primaryDisplayCheck" type="checkbox" name="display" checked={primary.display} />
            Mostrar Boton Primario
          </label>
          <label htmlFor="primaryTextInput" className={styles.inputContainer}>
            Texto
            <input id="primaryTextInput" type="text" name="text" value={primary.text} />
          </label>
          <label htmlFor="primaryUrlInput" className={styles.inputContainer}>
            Link
            <input id="primaryUrlInput" type="text" name="url" value={primary.url} />
          </label>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.row}>
        <div className={styles.sectionLeft}>
          <p className={styles.sectionTitle}>
            Boton Secundario
          </p>
        </div>
        <div className={styles.sectionRight}>
          <label htmlFor="secondaryDisplayCheck" className={styles.checkboxContainer}>
            <input id="secondaryDisplayCheck" type="checkbox" name="display" checked={secondary.display} />
            Mostrar Boton Secundario
          </label>
          <label htmlFor="secondaryTextInput" className={styles.inputContainer}>
            Texto
            <input id="secondaryTextInput" type="text" name="text" value={secondary.text} />
          </label>
          <label htmlFor="secondaryUrlInput" className={styles.inputContainer}>
            Link
            <input id="secondaryUrlInput" type="text" name="url" value={secondary.url} />
          </label>
        </div>
      </div>
    </div>
  </Modal>
);

BannerModal.propTypes = {
  id: string.isRequired,
  title: string,
  backgroundImage: string.isRequired,
  textView: shape({
    text: string,
    color: string,
    display: bool
  }).isRequired,
  primary: shape({
    display: bool,
    text: string,
    url: string
  }).isRequired,
  secondary: shape({
    display: bool,
    text: string,
    url: string
  }).isRequired
};

BannerModal.defaultProps = {
  title: ''
};

export default BannerModal;
