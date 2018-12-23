import React from 'react';
import uuid from 'uuid/v4';
import { bool, func, string } from 'prop-types';
import shapes from 'shapes';
import styles from './InfoSection.module.scss';

import Section from './SettingsSection';

import { estados } from 'fixtures';

const { addressShape } = shapes;

const InfoSection = ({ address, display, brandName, handleChange, handleAddressChange }) => {
  const renderOptions = () => estados.map(estado => (
    <option key={uuid()} value={estado}>{estado}</option>
  ));

  return (
    <Section title="Informacion" display={display}>
      <label htmlFor="brandNameInput" className={styles.inputContainer}>
        Brand Name
        <input id="brandNameInput" type="text" name="brandName" value={brandName} onChange={handleChange} />
      </label>
      <label htmlFor="cityInput" className={styles.inputContainer}>
        Ciudad
        <input id="cityInput" type="text" name="city" value={address.city} onChange={handleAddressChange} />
      </label>
      <label className={styles.inputContainer} htmlFor="stateSelect"> {/* eslint-disable-line */}
        Estado
        <select
          id="stateSelect"
          className={styles.select}
          value={address.state}
          onChange={handleAddressChange}
          name="state"
        >
          {renderOptions()}
        </select>
      </label>
    </Section>
  );
};

InfoSection.propTypes = {
  address: addressShape,
  display: bool.isRequired,
  brandName: string.isRequired,
  handleChange: func.isRequired,
  handleAddressChange: func.isRequired
};

InfoSection.defaultProps = {
  address: {}
};

export default InfoSection;
