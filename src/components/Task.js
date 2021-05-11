import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = React.memo(({ task, index }) => {
  
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="list-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
});

export default Task;