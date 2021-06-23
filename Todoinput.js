import React from "react";
import { useState } from "react";
export default function TodoInput({ setTodos }) {
  const [inputData, setInputData] = useState("");
  function handleAddTodo() {
    setTodos((todos) => {
      return [
        {
          title: inputData,
          isCompleted: false,
          id: todos[todos.length - 1].id + 1,
        },
        ...todos,
      ];
    });
  }
  return (
    <div className="add-items d-flex">
      <input
        value={inputData}
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onChange={(e) => setInputData(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
}
