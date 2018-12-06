import React from 'react';
import { bool, func, string } from 'prop-types';
import shapes from 'shapes';
import styles from './ImagesSection.scss';
import sharedStyles from './styles.scss';

import Section from './SettingsSection';
import ColorPicker from '../../ColorPicker';

const { stylesheetShape } = shapes;

const ImagesSection = ({ display, stylesheet, handleFileChange, setStylesheet, profilePic }) => (
  <Section title="Imagenes" display={display}>
    <div className={styles.imageSelect}>
      <p className={sharedStyles.subTitle}>
        Imagen de Fondo
      </p>
      <div>

        {
          stylesheet.bgImage
            ? <img className={styles.bgImage} src={stylesheet.bgImage} alt="Tu imagen de fondo" style={{ backgroundColor: stylesheet.bgColor }} />
            : <div className={styles.bgImage} style={{ backgroundColor: stylesheet.bgColor }} />
        }

        <label htmlFor="bg-img-input" className={styles.imageLabel}>
          Subir Imagen
          <input
            id="bg-img-input"
            name="bgImage"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
        </label>
      </div>
      <p className={styles.recommended}>
        Recomendado: 1920 x 576. Ratio: 3.33
      </p>
    </div>
    <p className={sharedStyles.subTitle}>
      Color de Fondo
    </p>
    <ColorPicker selectedColor={stylesheet.bgColor} setStylesheet={setStylesheet} property="bgColor" />
    <div className={styles.imageSelect}>
      <p className={sharedStyles.subTitle}>
        Imagen de Perfil
      </p>
      <div>
        <img className={styles.profileImg} src={profilePic} alt="foto de perfil" />
        <label htmlFor="profile-pic-input" className={styles.imageLabel}>
          Subir Imagen
          <input
            id="profile-pic-input"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
        </label>
      </div>
      <p className={styles.recommended}>
        Recomendado: 400 x 400. Ratio: 1
      </p>
    </div>
  </Section>
);

ImagesSection.propTypes = {
  display: bool.isRequired,
  handleFileChange: func.isRequired,
  setStylesheet: func.isRequired,
  profilePic: string.isRequired,
  stylesheet: stylesheetShape
};

ImagesSection.defaultProps = {
  stylesheet: {}
};

export default ImagesSection;
