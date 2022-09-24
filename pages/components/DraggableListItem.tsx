import { Draggable } from '@hello-pangea/dnd';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ListContent from '../../models/ListContent';

export type DraggableListItemProps = {
  listContent: ListContent;
  index: number;
};

const DraggableListItem = ({ listContent, index }: DraggableListItemProps) => {
  return (
    <Draggable draggableId={listContent.id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
        >
          <ListItemAvatar>
            <Avatar src={listContent.avatarImageUrl} style={{border: 0}} />
          </ListItemAvatar>
          <ListItemText primary={listContent.itemTextPrimary} secondary={listContent.itemTextSecondary} />
        </ListItem>
      )}
    </Draggable>
  );
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: "none",
  background: isDragging ? "lightgray" : "",
  ...draggableStyle,
});

export default DraggableListItem;
