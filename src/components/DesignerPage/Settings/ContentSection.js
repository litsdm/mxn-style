import React from 'react';
import { bool, func } from 'prop-types';
import shapes from '@shapes';
// import styles from './ContentSection.scss';
import sharedStyles from './styles.scss';

import Section from './SettingsSection';
import ColorPicker from '../../ColorPicker';

const { stylesheetShape } = shapes;

const ContentSection = ({ display, stylesheet, setStylesheet }) => (
  <Section title="Contenido" display={display}>
    <p className={sharedStyles.subTitle}>
      Accent Color
    </p>
    <ColorPicker selectedColor={stylesheet.accentColor} setStylesheet={setStylesheet} property="accentColor" />
  </Section>
);

ContentSection.propTypes = {
  display: bool.isRequired,
  setStylesheet: func.isRequired,
  stylesheet: stylesheetShape
};

ContentSection.defaultProps = {
  stylesheet: {}
};

export default ContentSection;
