import React from "react";

export default function Todo({ todo, handleStatuse }) {
  return (
    <li className={todo.isCompleted ? "completed" : ""}>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.isCompleted}
            onClick={() => handleStatuse(todo.id)}
          />
          {todo.title}
          <i className="input-helper"> </i>
        </label>
      </div>
      <i className="remove mdi mdi-close-circle-outline"></i>
    </li>
  );
}
