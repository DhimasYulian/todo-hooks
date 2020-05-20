import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div className="col-md-6">
            <ul className="list-group">
                <li style={{ textDecoration: todo.isCompleted ? 'line-through' : "" }} className="list-group-item">
                    {todo.activity}
                    <button onClick={() => removeTodo(index)} className="btn btn-danger float-right">X</button>
                    <button onClick={() => completeTodo(index)} className="btn btn-primary float-right mr-2">Complete</button>
                </li>
            </ul>
        </div>
    );
}

export default Todo;