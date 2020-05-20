import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {

  const [todos, setTodos] = useState([
    {
      activity: 'Learn Hooks',
      isCompleted: false
    },
    {
      activity: 'Build Portfolio Website',
      isCompleted: false
    },
    {
      activity: 'Make a video about React',
      isCompleted: false
    }
  ]);

  const addTodo = activity => {
    const newTodos = [...todos, { activity }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  return (
    <div className="container mt-4">
      <h1>Todos Hooks</h1>
      <div className="mt-4">
        <div className="mx-auto">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
