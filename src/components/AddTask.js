import React, { useContext } from "react";
import Form from "./Form";
import { IoIosAdd } from "react-icons/io";
import DrgDrpContext from "./information/DrgDrpContext";

const AddTask = ({ columnId, isEditing }) => {
  const { handleEditing } = useContext(DrgDrpContext);
  if (isEditing) {
    return <Form columnId={columnId} />;
  } else {
    return (
      <div className="add-card_button">
        <IoIosAdd
          onClick={() => handleEditing(columnId)}
          className="add-card_button-icon"
        />
        <p className="add-card_text">Add Card</p>
      </div>
    );
  }
};

export default AddTask;