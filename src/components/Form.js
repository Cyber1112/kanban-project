import React, { useContext, useRef } from "react";
import DrgDrpContext from "./information/DrgDrpContext";

const Form = ({ columnId }) => {
  const { addData, endEditing } = useContext(DrgDrpContext);
  let newTask = useRef(null);
  const handleAddClick = () => {
    endEditing(columnId);
    if (newTask.value === "") {
      alert("Task cannot be empty!");
    } else {
      addData(columnId, newTask.value);
    }
  };

  return (
    <form className="form-submit-content">
      <input
        autoFocus
        className="input"
        type="text"
        placeholder="Write a task here"
        ref={(val) => (newTask = val)}
        defaultValue=""
        minLength="2"
        maxLength="60"
      />
      <button
        type="button"
        className="button-submit"
        onClick={handleAddClick}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;