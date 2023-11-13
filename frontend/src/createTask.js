import {React, useState} from 'react'
import './createTask.css';

// const [users] = useState([
//     {
//         title: 'Task1',
//     },
//     {
//         title: 'Task2',
//     },
//     {
//         title: 'Task3',
//     },
//     {
//         title: 'Task4',
//     },
//     {
//         title: 'Task5',
//     },
//     {
//         title: 'Task6',
//     },

// ])

function CreateTask () {

    return (
        <div>
            <div className="TitleContainer-ct">
                <header className="Title-ct">
                    Create a Task
                </header>
            
            </div>

            <div className="BigBox-ct">
                <div className="Container-ct">
                    <div>
                        <textarea 
                            className="AddTaskTitle-ct"
                            name="taskTitle"
                            placeholder={"Add a Task Title"}
                            rows={1}
                        />
                    </div>
                    <div>
                        <textarea
                            className="TaskContainer-ct"
                            name='task'
                            placeholder={"Add Task Instructions"}
                        />
                            
                    </div>
                    <div>
                        <p>Enter Due Date: </p>
                        <input class="DueDate" type="date" ></input>
                    </div>


                </div>
                <div className="Assign-ct">
                    <header className="AddTitle-ct">
                        Assign member
                    </header>
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>

                </div>
            
            </div>


        </div>

    )
}

export default CreateTask