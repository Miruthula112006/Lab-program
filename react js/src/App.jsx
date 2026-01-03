import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [text,setText] = useState(" ");

  const addTask=(e)=>{
    e.preventDefault();
    const trimmed =text.trim();
    if(!trimmed)return;

    const newTask = {
      id: Date.now(),
      text: trimmed,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setText(" ");
  };

  const deleteTask=(id)=>{
    setTasks(tasks.filter((t)=>t.id!==id));
  };

  const toggleTask = (id)=>{
    setTasks(
      tasks.map((t)=>
        t.id===id?{...t,completed: !t.completed}:t
    )
  );
  };

  return(
    <div className='app'>
      <h1>To-Do-List</h1>
      <form onSubmit={addTask} className='task-form'>
        <input 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder='enter new task' 
        aria-label='Task'
        />
        <button type='submit'>Add</button>
      </form>
      <ul className='task-list'>
        {tasks.length===0 && <li className='empty'>No tasks yet</li>}
        {tasks.map((task)=>{
          <li key={task.id} className='task-name'>
            <input
            type="checkbox" checked={task.completed}
            onChange={()=>toggleTask(task.id)}
            />
            <span onClick={()=>toggleTask(task.id)}
            className={task.completed? "done":""}>
              {task.text}
            </span>
            <button className='delete' onClick={()=>deleteTask(task.id)}>Delete</button>
          </li>
        })}

      </ul>

    </div>
  );
}

 /* return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */

export default App
