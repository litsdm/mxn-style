import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './ContentSection.scss';

class CategorySettings extends Component {
  state = {
    display: false
  }

  getItemStyle = (draggableStyle) => {
    const { index } = this.props;
    const element = document.getElementById(`Category-item-${index}`);

    if (!element) return;

    const { top } = element.getBoundingClientRect();

    return {
      ...draggableStyle,
      top: `${top}px !important`
    }
  }

  render() {
    const { index, type, title } = this.props;
    const { display } = this.state;
    return (
      <Draggable draggableId={`dragity-drag-${index}`} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`${styles.dragItem} ${snapshot.isDragging ? styles.dragging : ''}`}
            style={this.getItemStyle(provided.draggableProps.style)}
            id={`Category-item-${index}`}
          >
            <div className={styles.cardTitle}>
              <p>
                {`${type}: ${title}`}
              </p>
              <i className={`fa fa-angle-${display ? 'down' : 'right'}`} />
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default CategorySettings;
