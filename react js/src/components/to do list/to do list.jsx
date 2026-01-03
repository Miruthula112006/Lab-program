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