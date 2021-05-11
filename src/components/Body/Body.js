import React from "react";
import Column from "../Column";
import { DragDropContext } from "react-beautiful-dnd";

const Body = ({state, onDragEnd}) => {

  return (
    <div className="body-container_content">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="container bg-blue">
          <div className="columns is-multiline is-mobile">
            {state.columnsOrder.map((columnId, index) => {
              const column = state.columns[columnId];
              const isEditing = column.isEditing;
              const task = column.tasksOrder.map(
                (taskId) => state.tasks[taskId]
              );
              return (
                <Column
                  key={column.id}
                  tasks={task}
                  index={index}
                  column={column}
                  isEditing={isEditing}
                />
              );
            })}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};
export default Body;
