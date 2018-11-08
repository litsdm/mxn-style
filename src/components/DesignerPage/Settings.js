import React from 'react';
import { bool, func, string } from 'prop-types';
import shapes from '@shapes';
import styles from './Settings.scss';

import Section from './SettingsSection';
import ColorPicker from '../ColorPicker';

const { userShape } = shapes;

const positionStyles = {
  left: styles.containerLeft,
  right: styles.containerRight,
  down: styles.containerDown
}

const Settings = ({ position, setState, display, user: { stylesheet }, setStylesheet }) => (
  <div className={`${positionStyles[position]} ${display ? styles.display : {}}`}>
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
    <Section title="Imagenes" display={display}>
      <div className={styles.imageSelect}>
        <p className={styles.subTitle}>
          Imagen de Fondo
        </p>
        <div>
          <img className={styles.bgImage} src="https://s3-us-west-1.amazonaws.com/mxnstyle-bucket/mxnStyle.png" alt="Tu imagen de fondo" />
          <label htmlFor="bg-img-input" className={styles.imageLabel}>
            Subir Imagen
            <input id="bg-img-input" type="file" />
          </label>
        </div>
        <p className={styles.recommended}>
          Recomendado: 1920 x 576. Ratio: 3.33
        </p>
      </div>
      <p className={styles.subTitle}>
        Color de Fondo
      </p>
      <ColorPicker selectedColor={stylesheet.bgColor} setStylesheet={setStylesheet} />
      <div className={styles.imageSelect}>
        <p className={styles.subTitle}>
          Imagen de Perfil
        </p>
        <div>
          <img className={styles.profileImg} src="https://pbs.twimg.com/profile_images/979066646944890880/DmU2eg7s_400x400.jpg" alt="foto de perfil" />
          <label htmlFor="bg-img-input" className={styles.imageLabel}>
            Subir Imagen
            <input id="bg-img-input" type="file" />
          </label>
        </div>
        <p className={styles.recommended}>
          Recomendado: 400 x 400. Ratio: 1
        </p>
      </div>
    </Section>
    <Section title="Informacion" display={display}>
      info
    </Section>
    <Section title="Contenido" display={display}>
      content
    </Section>
  </div>
);

Settings.propTypes = {
  position: string.isRequired,
  setState: func.isRequired,
  display: bool.isRequired,
  setStylesheet: func.isRequired,
  user: userShape
};

Settings.defaultProps = {
  user: null
};

export default Settings;
