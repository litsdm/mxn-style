import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './ContentSection.scss';

const CategorySettings = ({ index, type, category: { title } }) => {
  const getItemStyle = (draggableStyle) => {
    const element = document.getElementById(`Category-item-${index}`);

    if (!element) return;

    const { top, left, right } = element.getBoundingClientRect();

    return {
      ...draggableStyle,
      top: `${top}px !important`,
      left: `${left}px !important`,
      right: `${right}px !important`
    }
  }

  const openModal = () => {
    const element = document.getElementById(`CM-${index}`);
    if (!element) return;

    element.style.display = 'block';
  }

  return (
    <Draggable draggableId={`dragity-drag-${index}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${styles.dragItem} ${snapshot.isDragging ? styles.dragging : ''}`}
          style={getItemStyle(provided.draggableProps.style)}
          id={`Category-item-${index}`}
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
          onClick={openModal}
        >
          <div className={styles.cardTitle}>
            <p>
              {`${type}: ${title}`}
            </p>
            <i className="fa fa-angle-right" />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CategorySettings;
