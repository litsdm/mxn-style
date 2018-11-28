import React from 'react';
import { arrayOf, string } from 'prop-types';
import shapes from '@shapes';

import Modal from '@components/Modal';

import styles from './CategoryModal.scss';

const { productShape } = shapes;

const CategoryModal = ({ id, title, products }) => {
  const renderProducts = () => products.map(({ name, thumbnail }) => (
    <div className={styles.product}>
      <img src={thumbnail} alt={`${name} product thumbnail`} />
      <p>{name}</p>
    </div>
  ))

  return (
    <Modal id={id} title={title}>
      <div className={styles.content}>
        <label htmlFor="categoryTitleInput" className={styles.inputContainer}>
          Nombre de la Categoria
          <input id="categoryTitleInput" type="text" name="title" value={title} />
        </label>
        <div className={styles.products}>
          <p>
            Productos
          </p>
          <div className={styles.controls}>
            <button type="button" className={styles.primary}>
              Crear Producto
            </button>
            <button type="button" className={styles.secondary}>
              Agregar Producto
            </button>
          </div>
          <div className={styles.list}>
            {renderProducts()}
          </div>
        </div>
      </div>
    </Modal>
  );
};

CategoryModal.propTypes = {
  id: string.isRequired,
  title: string,
  products: arrayOf(productShape).isRequired
};

CategoryModal.defaultProps = {
  title: ''
};

export default CategoryModal;
