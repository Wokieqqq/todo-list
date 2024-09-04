import "./TaskList.css";
import React, { useState } from "react";
import complete from "../../icons/complete.svg";
import incomplete from "../../icons/incomplete.svg"
import loading from "../../icons/spinner.svg"
function TaskList({list}){
    
    const [taskList, setTaskList] = useState(list);

     function selectPriority(priorityNum){
        switch(priorityNum){
            case 1:
                return "Important";
                break
            case 2:
                return "Medium";
                break
            case 3:
                return "Not Important";
                break
            default:
                return "Error";
        }
     }
     function selectColor(priorityNum){
        switch(priorityNum){
            case 1:
                return "important-color"
                break
            case 2:
                return "medium-color"
                break
            case 3:
                return "not-impor-color"
                break
            default:
                return ""
        }
        
     }

     function formatDate(date) {
        const currentDate = new Date()
        const currentDay = currentDate.getDate()
        const currentY = new Date()
        const currentYear = currentY.getFullYear()
        const taskDate = new Date(date)
        const taskDay = taskDate.getDate()
        const taskY = new Date(date)
        const taskYear = taskY.getFullYear()

        const taskM = new Date(date)
        const taskMonth = taskM.getMonth()
        const currentM = new Date()
        const currentMonth = currentM.getFullYear()
        console.log(taskDay)
        console.log(currentYear)

        if(taskDay == currentDay && taskYear == currentYear && taskMonth == currentMonth){
            return "Today"
        }else if(currentDay -1 == taskDay && taskYear == currentYear && taskMonth == currentMonth){
            return "Yesterday"
        }else if(currentDay +1 == taskDay && taskYear == currentYear && taskMonth == currentMonth){
            return "Tommorow"
        }
        else{
            return date
        }
    }

    return(
        <section id="task-list-wrapper">
            {list != undefined ? list.map(item =>(
            <div className={`main-wrapper-info ${selectColor(item.priority)}`}>
                <div className="title-wrapper">
                    <h1>{item.title}</h1>
                    <img src={item.isComplete == true ? complete: incomplete} alt=""/>
                </div>
                <div className="main-info-wrapper ">
                    <label className="descrip-info">{item.description}</label>
                    <h1>Date: {formatDate(item.date)}, {item.time}</h1>
                    <h1>{selectPriority(item.priority)}</h1>
                </div>
                <div className="delete-complete-button-wrapper">
                    <div className="complete-wrapper">
                        <label>Complete</label>
                        <input type="checkbox" ></input>
                    </div>
                    <button>Delete</button>
                </div>
            </div>
        )): <div>
                <img src={loading} alt="loader" className="loader"/>
            </div>}
        </section>

    
    )
}
export default TaskList