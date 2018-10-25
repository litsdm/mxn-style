import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LastStep.scss';

const LastStep = () => (
  <div className={styles.container}>
    <p className={styles.title}>
      Tu cuenta fue creada con exito!
    </p>
    <i className={`${styles.icon} far fa-check-circle`} />
    <p className={styles.subTitle}>
      Un ultimo paso
    </p>
    <p className={styles.note}>
      Crea tu pagina de diseñador. Aqui podras subir tus productos para venderlos en Mexican Style, puedes utilizar una de nuestras templates y modificarla a tu gusto!
    </p>
    <Link to="#" className={styles.primary}>
      Crear Pagina de Diseñador
    </Link>
  </div>
);

export default LastStep;
