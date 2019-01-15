import React from 'react';
import styles from './ChoosePlanModal.module.scss';

import Modal from './Modal';

const ChoosePlanModal = ({ selectPlan }) => (
  <Modal id="choosePlanModal" title="Escoge tu Plan" modalStyle={{ width: '100%', maxHeight: 'none', height: '100%', borderRadius: '0' }}>
    <div className={styles.plans}>
      <div className={styles.secondaryCard}>
        <div className={styles.points}>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Puedes subir hasta <b>10</b> de tus <b>productos</b>.
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Tendrás acceso a <b>click and collect</b> y nuestro <b>showroom!</b>
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Puedes diseñar tu pagina a <b>tu antojo!</b>
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              <b>No</b> pagas envios!
            </p>
          </div>
        </div>
        <p className={styles.note}>
          Este plan es perfecto para ti si empezando con tu marca y no cuentas con un sistema de mayoreo.
        </p>
        <button className={styles.choosePlan} onClick={() => selectPlan({ index: 0, name: 'Josefa' })}>
          Escoger Plan
          <div className={styles.divider} />
          <div className={styles.price}>
            $350 MXN <span>mensual</span>
          </div>
        </button>
      </div>
      <div className={styles.card}>
        <div className={styles.points}>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Es necesario subir tus productos a precio de <b>mayoreo</b> y a los clientes les aparecerá al precio que tu lo vendes en el mercado.
            </p>
          </div>
          <p className={styles.pointNote}>
            Tiene que ser entre un 50% y un 30%  por debajo de tu precio de venta
          </p>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Puedes subir <b>todos</b> los productos que quieras!
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Tendrás acceso a <b>click and collect</b> y nuestro <b>showroom!</b>
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Puedes diseñar <b>tu pagina a tu antojo!</b>
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Los envios son <b>gratis!</b>
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Estarás en <b>Amazon!</b> Y podrás vendar para <b>USA y Canada!</b>
            </p>
          </div>
        </div>
        <p className={styles.note}>
          Este plan es perfecto para ti si ya tienes un sistema de mayoreo y cuentas con mas de 10 productos para vender y tienes una buena producción!
        </p>
        <button className={styles.choosePlan} onClick={() => selectPlan({ index: 1, name: 'Sor Juana' })}>
          Escoger Plan
          <div className={styles.divider} />
          <div className={styles.price}>
            $350 MXN <span>mensual + precio mayoreo</span>
          </div>
        </button>
      </div>
      <div className={styles.secondaryCard}>
        <div className={styles.points}>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Es necesario subir tus productos a precio de <b>mayoreo</b> y a los clientes les aparecerá al precio que tu lo vendes en el mercado.
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Puedes subir <b>todos</b> los productos que quieras!
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Tendrás acceso a <b>click and collect</b> y nuestro <b>showroom!</b>
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Puedes diseñar tu pagina a <b>tu antojo!</b>
            </p>
          </div>
          <div className={styles.point}>
            <i className="far fa-check-circle" />
            <p>
              Pagas <b>1/4</b> de los envios y nosotros <b>nos encargamos</b> de todo lo demas!
            </p>
          </div>
        </div>
        <p className={styles.note}>
          Este plan es perfecto para ti si ya tienes un sistema de mayoreo y cuentas con mas de 10 productos para vender.
        </p>
        <button className={styles.choosePlan} onClick={() => selectPlan({ index: 3, name: 'Frida' })}>
          Escoger Plan
          <div className={styles.divider} />
          <div className={styles.price}>
            Gratis <span>+ precio mayoreo</span>
          </div>
        </button>
      </div>
    </div>
  </Modal>
);

export default ChoosePlanModal;
