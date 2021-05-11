import React from "react";
import AllTasks from "./AllTasks";
import AddTask from "./AddTask";
import { Droppable } from "react-beautiful-dnd";

const Column = React.memo(({ tasks, column, isEditing }) => {
  return (
    <div className="column is-marginless">
      <div className="card card-radius ">
        
        <div className="card-content">
        <p className="title-board_name">{column.title}</p>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                className="list is-hoverable"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "",
                  overflow: "scroll"
                }}
              >
                <AllTasks tasks={tasks} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <AddTask columnId={column.id} isEditing={isEditing} />
      </div>
    </div>
  );
});

export default Column;