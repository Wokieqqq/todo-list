import TaskList from "../task-list/TaskList"
import "./CreateTask.css"
import React, { useState } from "react"
function CreateTask(){
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            title: "Walk with dog",
            description: "Go for a walk with dog",
            date: "2025-08-20",
            time: "12:40",
            priority: 1,
            isComplete:false
        },   
        {
            id: 2,
            title: "Go to the gym",
            description: "Go for training to the near gym",
            date: "2024-08-19",
            time: "10:00",
            priority: 2,
            isComplete:false
        },
        {
            id: 3,
            title: "Buy milk",
            description: "Go to the supermarket and buy milk",
            date: "2024-08-21",
            time: "14:00",
            priority: 3,
            isComplete:true
        },
    ])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [priority, setPriority] = useState(1)

    function createTask(event){
        event.preventDefault()

        console.log(title, description, date, time, priority)

        const newTask ={
            id: 3,
            title: title,
            description: description,
            date: date,
            time: time,
            priority: Number(priority),
            isComplete:true
        }
        setTaskList([newTask])
    }
    
    return(
        <section id="main-wrapper">
            <form id="create-task" onSubmit={createTask}>
                <div className="title">
                    <h1>Create Task</h1>
                </div>
                <div className="name-info-wrapper">
                    <div className="input-wrapper">
                        <label>Task Title</label>
                        <input type="text" onChange={function (event){setTitle(event.target.value)}}></input>
                    </div>
                    <div className="input-wrapper">
                        <label>Description</label>
                        <textarea id="story" onChange={function (event){setDescription(event.target.value)}}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Date:</label>
                        <input type="date" onChange={function (event){setDate(event.target.value)}}></input>
                    </div>
                    <div className="input-wrapper">
                        <label>Time:</label>
                        <input type="time" onChange={function (event){setTime(event.target.value)}}></input>
                    </div>
                    <div className="input-wrapper">
                        <label>Priority</label>
                        <select onChange={function (event){setPriority(event.target.value)}}>
                            <option value="1">Important</option>
                            <option value="2">Medium</option>
                            <option value="3">Not Important</option>
                        </select>
                    </div>
                    <div className="create-button-wrapper">
                        <button>Create</button>
                    </div>
                </div>
            </form>

            <TaskList list={taskList}/>
        </section>

    )
}
export default CreateTask