import {React, useState, useRef} from 'react'
import './createTask.css';
import NavigationBar from "./NavigationBar";

function CreateTask () {

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new formData(form);

        // fetch data
        fetch('/some-api', { method: form.method, body: formData });
    }

    const memberList = [
        'user1',
        'user2',
        'user3'
    ];

    const listItems = memberList.map (member =>
        <li>{member}</li>
        )
    

    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
          
    const handleChange = (e) => {
        setDate(e.target.value);
    }

    return (
        <div><NavigationBar/>
        <form method="post" onSubmit={handleSubmit}>
        <div >
            <div className="TitleContainer-ct">
                <header className='Title-ct'>
                    Create a Task
                </header>
            
            </div>

            <div className="BigBox-ct">
                <div className="Container-ct">
                    <div>
                        <textarea 
                            className='AddTaskTitle-ct'
                            name="taskTitle"
                            placeholder={"Add a Task Title"}
                            rows={1}
                        />
                    </div>
                    <div>
                        <textarea
                            className='TaskContainer-ct'
                            name='task'
                            placeholder={"Add Task Instructions"}
                        />
                            
                    </div>
                    <div className='ButtonBox'>
                        <button className='SubmitButton-ct'>Create Task</button>
                    </div>


                </div>
                <div className="Assign-ct">
                    <header className="AddTitle-ct">
                        Assign member
                    </header>
                    {/* temp data for now */}
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>
                    <ul>{listItems}</ul>
                    <div className="DueDate">
                        <header className="AddTitle">
                            Due date:
                        </header>
                        <input
                            type="date"
                            onChange={handleChange}
                            ref={dateInputRef}
                        />
                        <p>Selected Date: {date}</p>
                    </div>
                </div>

            
            </div>


        </div>
        </form>
        </div>
    )
}

export default CreateTask
