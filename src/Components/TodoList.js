import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo, key) => (
                    <ToDo
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text}
                        todo={todo}
                        key={key}
                    />
                ))}
            </ul>
        </div>
    );
};
export default ToDoList;
