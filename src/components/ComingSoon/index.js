import React from 'react';
import { func, string } from 'prop-types';
import styles from './styles.scss';

const ComingSoon = ({ email, handleChange, subscribe }) => (
  <div className={styles.container}>
    <p className={styles.brandName}>
      Mexican Style
    </p>
    <p className={styles.text}>
      ¡Que emoción que llegaras hasta aquí!
    </p>
    <p className={styles.subText}>
      ¡Aun estamos en construcción de la plataforma, pero dentro de muy muy poco si eres diseñador o comprador compulsivo tendremos grandes noticias para ti!
    </p>
    <p className={styles.subText}>
      Muy pronto podrás comprar todo tu closet en un solo lugar llevando a todo México en la piel
    </p>
    <p className={styles.incentive}>
      Sí ya no puedes mas de la emoción y quieres ser uno de los primeros en enterarse cuando estemos en línea deja tu correo aquí. Porque lo mexicano esta BIEN hecho
    </p>
    <div className={styles.subscribeWrapper}>
      <label htmlFor="comingSoonInput" className={styles.label}>
        Email
        <input id="comingSoonInput" type="email" name="email" value={email} onChange={handleChange} />
      </label>
      <button type="button" className={styles.subscribe} onClick={subscribe}>
        Subscribete!
      </button>
    </div>
  </div>
);

ComingSoon.propTypes = {
  email: string.isRequired,
  handleChange: func.isRequired,
  subscribe: func.isRequired
};

export default ComingSoon;
