import React from 'react';
import { func } from 'prop-types';
import shapes from '@shapes';
import sharedStyles from './styles.scss';
import styles from './AddressForm.scss';

const { addressShape, designerErrorsShape } = shapes;

const AddressForm = ({ address, errors, setState }) => {
  const { street, exterior, interior } = address;

  const handleChange = ({ target: { name, value } }) => {
    const newAddress = { ...address, [name]: value };
    setState({ address: newAddress });
  };

  return (
    <div>
      <p className={styles.note}>
        En esta dirección recogeremos tus productos cuando se vendan.
      </p>
      <div className={styles.streetDiv}>
        <label className={sharedStyles.label} htmlFor="streetInput">
          Calle
          {errors.street  ? <p className={sharedStyles.err}>{errors.street}</p> : null}
          <input
            id="streetInput"
            name="street"
            type="street"
            value={street}
            onChange={handleChange}
          />
        </label>
        <label className={sharedStyles.label} htmlFor="exteriorInput">
          Exterior
          {errors.exterior  ? <p className={sharedStyles.err}>{errors.exterior}</p> : null}
          <input
            id="exteriorInput"
            name="exterior"
            type="exterior"
            value={exterior}
            onChange={handleChange}
          />
        </label>
        <label className={sharedStyles.label} htmlFor="interiorInput">
          Interior
          {errors.interior  ? <p className={sharedStyles.err}>{errors.interior}</p> : null}
          <input
            id="interiorInput"
            name="interior"
            type="interior"
            value={interior}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

AddressForm.propTypes = {
  address: addressShape.isRequired,
  errors: designerErrorsShape.isRequired,
  setState: func.isRequired
};

export default AddressForm;
