import {React, useState, useRef} from 'react'
import './createTask.css';

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
        <form method="post" onSubmit={handleSubmit}>
        <div >
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
                    <div className='ButtonBox'>
                        <button className='SubmitButton'>Create Task</button>
                    </div>


                </div>
                <div className="Assign">
                    <header className="AddTitle">
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
    )
}

export default CreateTask
