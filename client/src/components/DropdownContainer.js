import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import shapes from 'shapes';
import styles from './DropdownContainer.scss';

import Dropdown from './Dropdown';

const { dropdownDataShape } = shapes;

const DropdownContainer = ({ text, url, data }) => (
  <div className={styles.dropdownContainer}>
    <Link to={url}>
      {text}
    </Link>
    <Dropdown
      dropdownClass={styles.dropdown}
      data={data}
    />
  </div>
);

DropdownContainer.propTypes = {
  text: string.isRequired,
  url: string,
  data: dropdownDataShape
};

DropdownContainer.defaultProps = {
  url: '/#',
  data: null
};

export default DropdownContainer;
