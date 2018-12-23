import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import shapes from 'shapes';
import styles from './SettingsSection.module.scss';

const { childrenShape } = shapes;

class SettingsSection extends Component {
  state = {
    displayContent: true
  }

  render() {
    const { title, children, display } = this.props;
    const { displayContent } = this.state;
    return (
      <div className={`${styles.container} ${display ? styles.display : {}}`}>
        <button
          type="button"
          className={styles.title}
          onClick={() => this.setState({ displayContent: !displayContent })}
        >
          {title}
          <i className={`fa fa-angle-${displayContent ? 'down' : 'right'}`} />
        </button>
        {
          displayContent
            ? (
              <div className={styles.content}>
                {children}
              </div>
            )
            : null
        }
      </div>
    );
  }
}

SettingsSection.propTypes = {
  display: bool.isRequired,
  title: string.isRequired,
  children: childrenShape.isRequired
};

export default SettingsSection;
