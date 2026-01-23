import { useState } from "react"

export default function TodoCard(){
    const[task,SetTask]=useState();
    return(
        <div className="bg-white p-5">
            <h2 className="text-[2em]">To-Do-List</h2>
            <input className="border" type="text" placeholder="Enter new Task" onKeyUp={(event)=>{SetTask(event.target.value)}}/>
            <button className="bg-[#755dc5]! text-white" onClick={()=>{console.log(task)}}>Add</button>
        <div>
            <i>No Tasks Yet</i>
        </div>
            
        </div>
    )
}
// app.jsx
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