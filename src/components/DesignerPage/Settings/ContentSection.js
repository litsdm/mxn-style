/* eslint-disable react/no-array-index-key */
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { array, bool, func } from 'prop-types';
import shapes from '@shapes';
import styles from './ContentSection.scss';
import sharedStyles from './styles.scss';

import Section from './SettingsSection';
import ColorPicker from '../../ColorPicker';
import Banner from './BannerSettings';
import Category from './CategorySettings';

const { stylesheetShape } = shapes;

const ContentSection = ({ display, stylesheet, setStylesheet, content, updateUser }) => {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      content,
      result.source.index,
      result.destination.index
    );

    updateUser({ content: items });
  }

  const renderContent = () =>
    content.map(({ type, ...rest }, index) =>
      type === 'banner'
        ? <Banner key={`CSKD-${index}`} index={index} type={type} banner={rest} />
        : <Category key={`CSKD-${index}`} index={index} type={type} category={rest} />
    );

  return (
    <Section title="Contenido" display={display}>
      <p className={sharedStyles.subTitle}>
        Accent Color
      </p>
      <ColorPicker selectedColor={stylesheet.accentColor} setStylesheet={setStylesheet} property="accentColor" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`${styles.dragList} ${snapshot.isDraggingOver ? styles.dragOver : ''}`}
            >
              {renderContent()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Section>
  );
};

ContentSection.propTypes = {
  display: bool.isRequired,
  setStylesheet: func.isRequired,
  stylesheet: stylesheetShape,
  updateUser: func.isRequired,
  content: array // eslint-disable-line react/forbid-prop-types
};

ContentSection.defaultProps = {
  stylesheet: {},
  content: []
};

export default ContentSection;
