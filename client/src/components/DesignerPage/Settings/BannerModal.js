import React, { Component } from 'react';
import { func, number, string } from 'prop-types';
import shapes from 'shapes';

import Modal from 'components/Modal';

import styles from './BannerModal.scss';

const { userShape } = shapes;


class BannerModal extends Component {
  state = {
    content: this.props.user.content // eslint-disable-line react/destructuring-assignment
  }

  formatColorText = (text) => {
    if (text.startsWith('#')) return text;
    let modifiableText = text;

    if (text.length === 6) {
      modifiableText[0] = '#';
    } else {
      modifiableText = `#${text}`;
    }

    return modifiableText;
  }

  handleChange = (subProperty) => ({ target: { name, value, type, checked } }) => {
    const { content } = this.state;
    const { index } = this.props;

    let finalValue = type === 'checkbox' ? checked : value

    if (name === 'color') finalValue = this.formatColorText(finalValue);

    const newBanner = subProperty
      ? {
        ...content[index],
        [subProperty]: {
          ...content[index][subProperty],
          [name]: finalValue
        }
      }
      : {
        ...content[index],
        [name]: finalValue
      };

    const newContent = [
      ...content.slice(0, index),
      newBanner,
      ...content.slice(index + 1)
    ];

    this.setState({ content: newContent });
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
    const { id, index, title } = this.props;
    const { textView, primary, secondary, backgroundImage } = content[index];

    return (
      <Modal id={id} title={title}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.sectionLeft}>
              <p className={styles.sectionTitle}>
                Fondo
              </p>
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.imageContainer}>
                <img src={backgroundImage} alt="banner's background" className={styles.bgImage} />
                <label htmlFor="bannerBgImageInput" className={styles.imageLabel}>
                  Subir Imagen
                  <input
                    id="bannerBgImageInput"
                    name="bgImage"
                    type="file"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.sectionLeft}>
              <p className={styles.sectionTitle}>
                Text View
              </p>
            </div>
            <div className={styles.sectionRight}>
              <label htmlFor="textViewDisplayCheck" className={styles.checkboxContainer}>
                <input id="textViewDisplayCheck" type="checkbox" name="display" checked={textView.display} onChange={this.handleChange('textView')} />
                <i
                  className={`far fa-${textView.display ? 'check-square' : 'square'}`}
                  style={textView.display ? { opacity: 1 } : { opacity: 0.5 }}
                />
                Mostrar Text View
              </label>
              <label htmlFor="textViewTextInput" className={styles.inputContainer}>
                Texto
                <input id="textViewTextInput" type="text" name="text" value={textView.text} onChange={this.handleChange('textView')} />
              </label>
              <label htmlFor="textViewColorInput" className={styles.inputContainer}>
                <span className={styles.colorWrapper}>
                  Color (Hex)
                  <div style={{ backgroundColor: textView.color }} />
                </span>
                <input id="textViewColorInput" type="text" name="color" value={textView.color} onChange={this.handleChange('textView')} maxLength={7} />
              </label>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.sectionLeft}>
              <p className={styles.sectionTitle}>
                Boton Primario
              </p>
            </div>
            <div className={styles.sectionRight}>
              <label htmlFor="primaryDisplayCheck" className={styles.checkboxContainer}>
                <input id="primaryDisplayCheck" type="checkbox" name="display" checked={primary.display} onChange={this.handleChange('primary')} />
                <i
                  className={`far fa-${primary.display ? 'check-square' : 'square'}`}
                  style={primary.display ? { opacity: 1 } : { opacity: 0.5 }}
                />
                Mostrar Boton Primario
              </label>
              <label htmlFor="primaryTextInput" className={styles.inputContainer}>
                Texto
                <input id="primaryTextInput" type="text" name="text" value={primary.text} onChange={this.handleChange('primary')} />
              </label>
              <label htmlFor="primaryUrlInput" className={styles.inputContainer}>
                Link
                <input id="primaryUrlInput" type="text" name="url" value={primary.url} onChange={this.handleChange('primary')} />
              </label>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.sectionLeft}>
              <p className={styles.sectionTitle}>
                Boton Secundario
              </p>
            </div>
            <div className={styles.sectionRight}>
              <label htmlFor="secondaryDisplayCheck" className={styles.checkboxContainer}>
                <input id="secondaryDisplayCheck" type="checkbox" name="display" checked={secondary.display} onChange={this.handleChange('secondary')} />
                <i
                  className={`far fa-${secondary.display ? 'check-square' : 'square'}`}
                  style={secondary.display ? { opacity: 1 } : { opacity: 0.5 }}
                />
                Mostrar Boton Secundario
              </label>
              <label htmlFor="secondaryTextInput" className={styles.inputContainer}>
                Texto
                <input id="secondaryTextInput" type="text" name="text" value={secondary.text} onChange={this.handleChange('secondary')} />
              </label>
              <label htmlFor="secondaryUrlInput" className={styles.inputContainer}>
                Link
                <input id="secondaryUrlInput" type="text" name="url" value={secondary.url} onChange={this.handleChange('secondary')} />
              </label>
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

BannerModal.propTypes = {
  id: string.isRequired,
  title: string,
  updateUser: func.isRequired,
  user: userShape,
  index: number.isRequired
};

BannerModal.defaultProps = {
  title: '',
  user: {}
};

export default BannerModal;
