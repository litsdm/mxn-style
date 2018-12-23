import React from 'react';
import shapes from 'shapes';
import styles from './DesignerCard.module.scss';

const { userShape } = shapes;

const DesignerCard = ({
  user: {
    brandName,
    profilePic,
    address: { city, state }
  }
}) => (
  <div className={styles.container}>
    <img src={profilePic} alt="designer identity" />
    <div className={styles.info}>
      <p className={styles.name}>{brandName}</p>
      <p className={styles.location}>
        <i className="fa fa-map-marker-alt" />
        {`${city}, ${state}`}
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

DesignerCard.propTypes = {
  user: userShape.isRequired
};

export default DesignerCard;
