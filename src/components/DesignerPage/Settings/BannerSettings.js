import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './ContentSection.scss';

const BannerSettings = ({ index, type }) => {
  const getItemStyle = (draggableStyle) => {
    const element = document.getElementById(`Banner-item-${index}`);

    if (!element) return;

    const { top } = element.getBoundingClientRect();

    return {
      ...draggableStyle,
      top: `${top}px !important`
    }
  }

  const openModal = () => {
    const element = document.getElementById(`BM-${index}`);
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
          id={`Banner-item-${index}`}
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
          onClick={openModal}
        >
          <div className={styles.cardTitle}>
            <p>
              {type}
            </p>
            <i className="fa fa-angle-right" />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default BannerSettings;
