import {React, useState} from 'react'
import './createPage.css';

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
            <div className="TitleContainer">
                <header className='Title'>
                    Create a Task
                </header>
            
            </div>

            <div className="BigBox">
                <div className="ContainerJ">
                    <div>
                        <textarea 
                            className='AddTaskTitle'
                            name="taskTitle"
                            placeholder={"Add a Task Title"}
                            rows={1}
                        />
                    </div>
                    <div>
                        <textarea
                            className='TaskContainer'
                            name='task'
                            placeholder={"Add Task Instructions"}
                        />
                            
                    </div>


                </div>
                <div className="Assign">
                    <header className="AddTitle">
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