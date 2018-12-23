import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import { string } from 'prop-types';
import shapes from 'shapes';
import styles from './Dropdown.module.scss';

const { dropdownDataShape, childrenShape } = shapes;

const ITEMS_PER_COLUMN = 6;
const COLUMN_WIDTH = 104;

const Dropdown = ({ data, children, dropdownClass, flexDirection }) => {
  const dataCondition = Object.prototype.hasOwnProperty.call(data[0], 'title');

  const getContainerWidth = (countHeaders) => {
    const count = countHeaders ? totalItems() : data.length;
    const columns = Math.ceil(count / ITEMS_PER_COLUMN);
    const width = columns * COLUMN_WIDTH;

    return `${width}px`;
  }

  const totalItems = () => {
    let count = data.length;

    data.forEach(({ items }) => { count += items.length; });

    return count;
  }

  const getContainerLeftPosition = () => { // eslint-disable-line
    const widthStr = getContainerWidth(dataCondition);
    const width = parseInt(widthStr.replace(/\D/g,''), 10); // eslint-disable-line
    const leftPosition = ((width / 2) - 12) * (-1);

    return `${leftPosition}px`;
  }

  const renderData = () => dataCondition ? renderDataWithCategory() : renderDataItems(data);

  const renderDataWithCategory = () => data.map(({ title, items }) => (
    <Fragment key={uuid()}>
      <p className={styles.dataTitle}>
        {title}
      </p>
      <div className={styles.items}>
        {renderDataItems(items)}
      </div>
    </Fragment>
  ));


  const renderDataItems = (items) => items.map(({ url, text }) => (
    <Link key={uuid()} to={url} className={styles.dataItem}>
      {text}
    </Link>
  ));


  return (
    <div
      className={`${styles.container} ${dropdownClass || ''}`}
      style={{ flexDirection, width: getContainerWidth(dataCondition), left: getContainerLeftPosition() }}
    >
      {data ? renderData() : children}
    </div>
  );
};

Dropdown.propTypes = {
  data: dropdownDataShape,
  children: childrenShape,
  dropdownClass: string,
  flexDirection: string,
}

Dropdown.defaultProps = {
  data: null,
  children: null,
  dropdownClass: '',
  flexDirection: 'column'
}

export default Dropdown;
