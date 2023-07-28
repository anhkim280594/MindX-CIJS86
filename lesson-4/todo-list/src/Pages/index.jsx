import React, { useState } from 'react'
import './styles.css';


const TodoList = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTodoList([...todoList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedList = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedList);
  };

  return (
    <div className='container'>
      <div className='todo-list-container'>
        <h1>Todo List Application</h1>
        <h1>Todo List App</h1>
        <div className='input-container'>
          <input
            type='text'
            value={task}
            onChange={handleInputChange}
            placeholder='Enter a task...'
          />
          <button className='btn btn-add' onClick={handleAddTask}>Add Todo</button>
        </div>
        <ul className='list-item'>
          {todoList.map((item, index) => (
            <div style={{display:'flex', alignItems:'center'}} key={index}>
              <div className='item'>
                {item}
              </div>
              <button className='btn btn-del' onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Pages() {
  return (
    <div className='App'>
      <TodoList />
    </div>
  );
}

export default Pages;