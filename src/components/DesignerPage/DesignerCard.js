import React from 'react';
import styles from './DesignerCard.scss';

const DesignerCard = () => (
  <div className={styles.container}>
    <img src="https://pbs.twimg.com/profile_images/979066646944890880/DmU2eg7s_400x400.jpg" alt="designer identity" />
    <div className={styles.info}>
      <p className={styles.name}>Mexican Style</p>
      <p className={styles.location}>
        <i className="fa fa-map-marker-alt" />
        Merida, Yucatan
      </p>
    </div>
    <div className={styles.socials}>
      <a href="https://www.facebook.com" className={styles.facebook}>
        <i className="fab fa-facebook" />
      </a>
      <a href="https://www.instagram.com" className={styles.instagram}>
        <i className="fab fa-instagram" />
      </a>
      <a href="https://www.twitter.com" className={styles.twitter}>
        <i className="fab fa-twitter" />
      </a>
      <a href="https://www.theirwebsite.com" className={styles.web}>
        <i className="fa fa-globe-americas" />
      </a>
    </div>
  </div>
);

export default DesignerCard;
