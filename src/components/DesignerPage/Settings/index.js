import React from 'react';
import { bool, func, string } from 'prop-types';
import shapes from '@shapes';
import styles from './styles.scss';

import Controls from './Controls';
import ImagesSection from './ImagesSection';
import InfoSection from './InfoSection';
import ContentSection from './ContentSection';

const { userShape } = shapes;

const positionStyles = {
  left: styles.containerLeft,
  right: styles.containerRight,
  down: styles.containerDown
}

const Settings = ({
  position,
  setState,
  display,
  user: { stylesheet, profilePic, brandName, address, content },
  setStylesheet,
  updateUser
}) => {
  const handleChange = ({ target: { name, value } }) => updateUser({ [name]: value });

  const handleAddressChange = ({ target: { name, value } }) => {
    const newAddress = { ...address, [name]: value };
    updateUser({ address: newAddress });
  }

  const handleFileChange = ({ target: { name, files } }) => {
    if (files && files[0]) {
      const reader = new FileReader();

      reader.onload = ({ target: { result } }) => {
        // update image
        const properties = name === 'bgImage'
          ? { stylesheet: { ...stylesheet, bgImage: result } }
          : { profilePic: result };
        updateUser(properties);
      }

      reader.readAsDataURL(files[0]);
    }
  }

  return (
    <div className={`${positionStyles[position]} ${display ? styles.display : {}}`}>
      <Controls position={position} setState={setState} />
      <ImagesSection
        display={display}
        handleFileChange={handleFileChange}
        setStylesheet={setStylesheet}
        profilePic={profilePic}
        stylesheet={stylesheet}
      />
      <InfoSection
        display={display}
        address={address}
        brandName={brandName}
        handleChange={handleChange}
        handleAddressChange={handleAddressChange}
      />
      <ContentSection
        display={display}
        stylesheet={stylesheet}
        setStylesheet={setStylesheet}
        content={content}
        updateUser={updateUser}
      />
    </div>
  );
}

Settings.propTypes = {
  position: string.isRequired,
  setState: func.isRequired,
  display: bool.isRequired,
  setStylesheet: func.isRequired,
  updateUser: func.isRequired,
  user: userShape
};

Settings.defaultProps = {
  user: null
};

export default Settings;
