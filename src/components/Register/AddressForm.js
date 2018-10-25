import React from 'react';
import uuid from 'uuid/v4';
import { func } from 'prop-types';
import shapes from '@shapes';
import sharedStyles from './styles.scss';
import styles from './AddressForm.scss';

import Footer from './Footer';

import { estados } from '@fixtures';

const { addressShape, designerErrorsShape } = shapes;

const AddressForm = ({ address, errors, setState, goToPage }) => {
  const { street, exterior, interior, city, postalCode, state } = address;

  const handleChange = ({ target: { name, value } }) => {
    const newAddress = { ...address, [name]: value };
    setState({ address: newAddress });
  };

  const handleNext = () => {
    if (!isValid()) return;
    goToPage(3);
  }

  const isValid = () => {
    const newErrors = {};

    setState({ errors: {} });

    if (!street) newErrors.street = 'Por favor introduzca su calle.';
    if (!exterior) newErrors.exterior = 'Por favor introduzca su numero exterior.';
    if (!city) newErrors.city = 'Por favor introduzca su ciudad.';
    if (!postalCode) newErrors.postalCode = 'Por favor introduzca su codigo postal.';

    setState({ errors: newErrors });

    return !(newErrors.street || newErrors.exterior || newErrors.city || newErrors.postalCode);
  }

  const renderOptions = () => estados.map(estado => (
    <option key={uuid()} value={estado}>{estado}</option>
  ));

  return (
    <div className={styles.container}>
      <p className={styles.note}>
        En esta dirección recogeremos tus productos cuando se vendan.
      </p>
      <div className={styles.streetDiv}>
        <label className={`${sharedStyles.label} ${styles.startLabel}`} htmlFor="streetInput">
          Calle
          {errors.street  ? <p className={sharedStyles.err}>{errors.street}</p> : null}
          {errors.exterior  ? <p className={sharedStyles.err}>{errors.exterior}</p> : null}
          <input
            id="streetInput"
            name="street"
            type="street"
            value={street}
            onChange={handleChange}
          />
        </label>
        <label className={`${sharedStyles.label} ${styles.midLabel}`} htmlFor="exteriorInput">
          Exterior
          <input
            id="exteriorInput"
            name="exterior"
            type="exterior"
            value={exterior}
            onChange={handleChange}
          />
        </label>
        <label className={`${sharedStyles.label} ${styles.endLabel}`} htmlFor="interiorInput">
          Interior
          <input
            id="interiorInput"
            name="interior"
            type="interior"
            value={interior}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.stateDiv}>
        <label className={sharedStyles.label} htmlFor="stateSelect"> {/* eslint-disable-line */}
          Estado
          <select
            id="stateSelect"
            className={styles.select}
            value={state}
            onChange={handleChange}
            name="state"
          >
            {renderOptions()}
          </select>
        </label>
        <label className={sharedStyles.label} htmlFor="cityInput">
          Ciudad
          {errors.city  ? <p className={sharedStyles.err}>{errors.city}</p> : null}
          <input
            id="cityInput"
            name="city"
            type="city"
            value={city}
            onChange={handleChange}
          />
        </label>
        <label className={`${sharedStyles.label} ${styles.cp}`} htmlFor="postalCodeInput">
          C.P.
          {errors.postalCode  ? <p className={sharedStyles.err}>{errors.postalCode}</p> : null}
          <input
            id="postalCodeInput"
            name="postalCode"
            type="postalCode"
            value={postalCode}
            onChange={handleChange}
          />
        </label>
      </div>
      <Footer goToPage={goToPage} page={2} handleNext={handleNext} />
    </div>
  );
};

AddressForm.propTypes = {
  address: addressShape.isRequired,
  errors: designerErrorsShape.isRequired,
  setState: func.isRequired,
  goToPage: func.isRequired
};

export default AddressForm;
