import { memo } from 'react';
import { DragDropContext, Droppable, OnDragEndResponder } from '@hello-pangea/dnd';
import ListContent from '../../models/ListContent';
import DraggableListItem from './DraggableListItem';

export type DraggableListProps = {
  items: ListContent[];
  onDragEnd: OnDragEndResponder;
};

const DraggableList = memo(({ items, onDragEnd }: DraggableListProps) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-list">
        {droppableProvided => (
          <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
            {items.map((item, index) => (
              <DraggableListItem listContent={item} index={index} key={item.id} />
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default DraggableList;
