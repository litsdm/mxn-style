import React from 'react';
import { func, string } from 'prop-types';
import shapes from 'shapes';
import styles from './styles.scss';

import Footer from './Footer';

const { designerErrorsShape } = shapes;

const DesignerForm = ({
  name,
  brandName,
  depositAccount,
  handleChange,
  goToPage,
  errors,
  setState
}) => {
  const handleNext = () => {
    if (!isValid()) return;
    goToPage(2);
  };

  const isValid = () => {
    const newErrors = {};

    setState({ errors: {} });

    if (!name) newErrors.name = 'Por favor introduzca su nombre.';
    if (!brandName) newErrors.brandName = 'Por favor introduzca el nombre de su marca.';
    if (!depositAccount) newErrors.depositAccount = 'Por favor introduzca la cuenta en la cual le depositaremos.';

    setState({ errors: newErrors });

    return !(newErrors.name || newErrors.brandName || newErrors.depositAccount);
  };

  return (
    <div>
      <label className={styles.label} htmlFor="nameInput">
        Nombre Completo
        {errors.name ? <p className={styles.err}>{errors.name}</p> : null}
        <input
          id="nameInput"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label} htmlFor="brandNameInput">
        Nombre de tu marca
        {errors.brandName ? <p className={styles.err}>{errors.brandName}</p> : null}
        <input
          id="brandNameInput"
          name="brandName"
          type="text"
          value={brandName}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label} htmlFor="depositAccInput">
        Cuenta Para Depositar
        {errors.depositAccount ? <p className={styles.err}>{errors.depositAccount}</p> : null}
        <input
          id="depositAccInput"
          name="depositAccount"
          type="text"
          value={depositAccount}
          onChange={handleChange}
        />
      </label>
      <Footer goToPage={goToPage} page={1} handleNext={handleNext} />
    </div>
  );
};

DesignerForm.propTypes = {
  name: string.isRequired,
  brandName: string.isRequired,
  depositAccount: string.isRequired,
  handleChange: func.isRequired,
  goToPage: func.isRequired,
  errors: designerErrorsShape.isRequired,
  setState: func.isRequired
}

export default DesignerForm;
