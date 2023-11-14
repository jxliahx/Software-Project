import React, { useState, useRef, useEffect } from "react";
import "./createTask.css";
import NavigationBar from "./NavigationBar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CreateTask() {
  axios.defaults.withCredentials = true;
  const searchParams = new URLSearchParams(window.location.search);
  const projectID = searchParams.get("project");
  const [members, setMembers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/members/" + projectID)
      .then((result) => {
        setMembers(result.data);
      })
      .catch((err) => console.log(err));
  }, [members]);
  const [task, setTask] = useState({
    projectID: projectID,
    taskName: "",
    description: "",
    memberID: "",
    dueDate: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/tasks/add", task)
      .then((result) => {
        if (result.data.Status) {
          alert("Task created");
          history.push("/ProjectAdmin?projectID=" + projectID);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }

  //members.map((member) => <li>{member}</li>);

  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  return (
    <div>
      <NavigationBar />
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <div className="TitleContainer-ct">
            <header className="Title-ct">Create a Task</header>
          </div>

          <div className="BigBox-ct">
            <div className="Container-ct">
              <div>
                <textarea
                  className="AddTaskTitle-ct"
                  name="taskTitle"
                  placeholder={"Add a Task Title"}
                  rows={1}
                  onChange={(e) =>
                    setTask({ ...task, taskName: e.target.value })
                  }
                />
              </div>
              <div>
                <textarea
                  className="TaskContainer-ct"
                  name="task"
                  placeholder={"Add Task Instructions"}
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                />
              </div>
              <div className="ButtonBox">
                <button className="SubmitButton-ct">Create Task</button>
              </div>
            </div>
            <div className="Assign-ct">
              <header className="AddTitle-ct">Assign member</header>
              {/* temp data for now */}
              <select
                onChange={(e) => {
                  setTask({ ...task, memberID: e.target.value });
                }}
              >
                {members.map((member) => (
                  <option value={member.FirstName} id="dropdown">
                    {member.memberID}
                  </option>
                ))}
              </select>

              <div className="DueDate">
                <header className="AddTitle">Due date:</header>
                <input
                  type="date"
                  onChange={(e) =>
                    setTask({ ...task, dueDate: e.target.value })
                  }
                  ref={dateInputRef}
                />
                <p>Selected Date: {date}</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
