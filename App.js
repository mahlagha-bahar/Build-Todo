import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Todo from "./Todo.js";
import { useState } from "react";
import TodoInput from "./Todoinput";
const initial = [
  {
    id: 1,
    title: "buy a car",
    isCompleted: true,
  },
  {
    id: 2,
    title: "buy a bag",
    isCompleted: true,
  },
  {
    id: 3,
    title: "buy a shoe",
    isCompleted: false,
  },
];
export default function App() {
  const [todos, setTodos] = useState(initial);
  function handleChangeStatuse(todoId) {
    const newTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });
    setTodos(newTodo);
  }

  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <TodoInput setTodos={setTodos} />
              <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list">
                  {todos.map((todo) => (
                    <Todo handleStatuse={handleChangeStatuse} todo={todo} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
