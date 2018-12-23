import React from 'react';
import { func, string } from 'prop-types';
import shapes from 'shapes';
import styles from './styles.module.scss';

import Footer from './Footer';

const { designerErrorsShape } = shapes;

const AccountForm = ({ email, password, handleChange, errors, goToPage, setState }) => {
  const handleNext = () => {
    if (!isValid()) return;
    goToPage(1);
  }

  const isValid = () => {
    const newErrors = {};

    setState({ errors: {} });

    if (!email) newErrors.email = 'Por favor introduzca su email.';
    if (email && !validateEmail(email)) newErrors.email = 'El email que introdujo no es válido.';
    if (!password) newErrors.password = 'Por favor introduzca su contraseña.';
    if (password && password.length < 3) newErrors.password = 'Su contraseña debe contener al menos 3 caracteres.';

    setState({ errors: newErrors });

    return !(newErrors.email || newErrors.password);
  }

  const validateEmail = emailStr => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailStr).toLowerCase());
  };

  return (
    <div>
      <label className={styles.label} htmlFor="emailInput">
        Email
        {errors.email  ? <p className={styles.err}>{errors.email}</p> : null}
        <input
          id="emailInput"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label} htmlFor="passwordInput">
        Contraseña
        {errors.password  ? <p className={styles.err}>{errors.password}</p> : null}
        <input
          id="passwordInput"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <Footer goToPage={goToPage} page={0} handleNext={handleNext} />
    </div>
  );
}

AccountForm.propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  errors: designerErrorsShape.isRequired,
  handleChange: func.isRequired,
  goToPage: func.isRequired,
  setState: func.isRequired
}

export default AccountForm;
