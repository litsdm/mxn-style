import React from 'react';
import { bool, string, shape } from 'prop-types';
import styles from './Banner.module.scss';

const Banner = ({ textView, primary, secondary, accentColor, backgroundImage }) => (
  <div
    className={styles.container}
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    {
      textView.display
        ? <p className={styles.text} style={{ color: textView.color }}>{textView.text}</p>
        : null
    }
    <div className={styles.controls}>
      {
        primary && primary.display
          ? (
            <a href={primary.url} className={styles.primary} style={{ backgroundColor: accentColor }}>
              {primary.text}
            </a>
          )
          : null
      }
      {
        secondary && secondary.display
          ? (
            <a
              href={secondary.url}
              className={styles.secondary}
              style={{ borderColor: accentColor, color: accentColor }}
            >
              {secondary.text}
            </a>
          )
          : null
      }
    </div>
  </div>
);

Banner.propTypes = {
  accentColor: string.isRequired,
  backgroundImage: string,
  textView: shape({
    color: string,
    display: bool,
    text: string
  }),
  primary: shape({
    url: string,
    text: string,
    display: bool
  }),
  secondary: shape({
    url: string,
    text: string,
    display: bool
  })
}

Banner.defaultProps = {
  backgroundImage: "",
  textView: {},
  primary: {},
  secondary: {}
}

export default Banner;
