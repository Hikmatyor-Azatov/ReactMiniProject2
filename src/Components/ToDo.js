import React from "react";

const ToDo = ({ text, todos, setTodos, todo }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const checkHandler = () => {
        const filtered = todos.map((el) => {
            if (el.id === todo.id) {
                el.completed = !el.completed;
                return el;
            }
            return el;
        });
        setTodos(filtered);
    };
    return (
        <div className={`todo ${todo.completed ? "completed" : ""}`}>
            <li className="todo-item">{text}</li>
            <button onClick={checkHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};
export default ToDo;
