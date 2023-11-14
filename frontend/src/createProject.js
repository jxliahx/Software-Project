import React, { useState } from "react";
import axios from "axios";
import "./createProject.css";
import { SearchBar } from "./Components/searchBar";
import { SearchResultsList } from "./Components/searchResultsList";
import {Link} from 'react-router-dom';

function CreateProject() {

  const [tasks] = useState([
    {
      title: "Task 1",
    },
    {
      title: "Task 2",
    },
    {
      title: "Task 3",
    },
    {
      title: "Task 4",
    },
    {
      title: "Task 5",
    },
    {
      title: "Task 6",
    },
  ]);

  const [results, setResults] = useState([]);

  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => setShowModal(true);
  // const closeModal = () => setShowModal(false);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new formData(form);

    // fetch data
    fetch('/some-api', { method: form.method, body: formData });
}

  return (
    <form method="post" onSubmit={handleSubmit}>
    <div>
      <div className="TitleContainer-cp">
        <header className="Title-cp">Create a Project</header>
        <input 
        className="createP" 
        type="text" 
        placeholder="Project Name"
        />
      </div>
      {/* <div>
        <TaskModalPortal
          visible={showModal}
          title="Portal Modal"
          description="I was rendered usign portals"
          onClose={closeModal}
        />
        <button onClick={openModal}>Show Modal</button> 
      </div> */}
      <div className="BigBox-cp">
        <div className="Container-cp">
          <div className="Tasks-cp">
            {tasks.map((task, i) => (
              <div key={i} className="Task-cp">
                <header className="TaskTitle-cp">{task.title}</header>
                <p></p>
               <Link to="/createTask">
                <button className="TaskButton-cp" >
                  +
                </button>
                </Link>
              </div>
            ))}
          </div>
          <div className='ButtonBox-cp'>
            <button className='SubmitButton-cp'>Create Task</button>
          </div>
        </div>
        <input type="submit" value="Create" />
      </div>

      </div>
      </form>

  );
}

export default CreateProject;
