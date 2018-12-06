import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { func, number, string } from 'prop-types';
import shapes from 'shapes';

import Modal from '@components/Modal';

import styles from './CategoryModal.scss';

const { userShape } = shapes;

class CategoryModal extends Component {
  state = {
    content: this.props.user.content // eslint-disable-line react/destructuring-assignment
  }

  handleChange = ({ target: { name, value } }) => {
    const { content } = this.state;
    const { index } = this.props;

    const newCategory = {
        ...content[index],
        [name]: value
      };

    const newContent = [
      ...content.slice(0, index),
      newCategory,
      ...content.slice(index + 1)
    ];

    this.setState({ content: newContent });
  }

  renderProducts = () => {
    const { content } = this.state;
    const { index } = this.props;
    const { products } = content[index];

    return products.map(({ name, thumbnail }) => (
      <div className={styles.product} key={uuid()}>
        <img src={thumbnail} alt={`${name} product thumbnail`} />
        <p>{name}</p>
      </div>
    ))
  }

  handleSave = () => {
    const { content } = this.state;
    const { updateUser } = this.props;
    updateUser({ content });
  }

  handleCancel = () => {
    const { id, user: { content } } = this.props;
    this.setState({ content });
    document.getElementById(id).style.display = 'none';
  }

  render() {
    const { content } = this.state;
    const { id, index } = this.props;
    const { title } = content[index];

    return (
      <Modal id={id} title={title}>
        <div className={styles.content}>
          <label htmlFor="categoryTitleInput" className={styles.inputContainer}>
            Nombre de la Categoria
            <input id="categoryTitleInput" type="text" name="title" value={title} onChange={this.handleChange} />
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
              {this.renderProducts()}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button type="button" className={styles.cancel} onClick={this.handleCancel}>
            Cancelar
          </button>
          <button type="button" className={styles.save} onClick={this.handleSave}>
            Guardar
          </button>
        </div>
      </Modal>
    );
  }
}

CategoryModal.propTypes = {
  id: string.isRequired,
  updateUser: func.isRequired,
  user: userShape,
  index: number.isRequired
};

CategoryModal.defaultProps = {
  user: {}
};

export default CategoryModal;
