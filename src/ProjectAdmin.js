import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./ProjectAdmin.css";
import { BiEdit } from "react-icons/bi";
import NavigationBar from "./NavigationBar";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ProjectAdmin() {
  const searchParams = new URLSearchParams(window.location.search);
  const projectID = searchParams.get("projectID");
  const projectName = searchParams.get("projectName");
  const [members, setMembers] = useState([]);
  const [openTasks, setOpenTasks] = useState([]);
  const [closedTasks, setClosedTasks] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/users/detail/" + localStorage.getItem("id")
      )
      .then((result) => {
        setUser(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, [user]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/members/" + projectID)
      .then((result) => {
        setMembers(result.data);
      })
      .catch((err) => console.log(err));
  }, [members]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/openTasks/" + projectID)
      .then((result) => {
        setOpenTasks(result.data);
      })
      .catch((err) => console.log(err));
  }, [openTasks]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/closedTasks/" + projectID)
      .then((result) => {
        setClosedTasks(result.data);
      })
      .catch((err) => console.log(err));
  }, [closedTasks]);
  return (
    <div className="container2">
      <NavigationBar />

      <div className="nav2">
        {" "}
        Project: {projectName}
        <button>
          <BiEdit />
        </button>
      </div>

      <div className="content1b">
        {" "}
        Members
        <button>
          <BiEdit />
        </button>
        <section className="sectionb">
          <ul className="ulB">
            <li key={user.UserID}>
              <strong>
                {user.FirstName} {user.LastName}
              </strong>
            </li>
            {members.map((member) => (
              <li key={member.UserID}>
                {member.FirstName} {member.LastName}
              </li>
            ))}
          </ul>
        </section>
        <button>Send Invitation</button>
      </div>

      <div className="main2">
        <button>
          <BiEdit />
        </button>
        <div className="title">Current Tasks</div>
        <ul>
          {openTasks.map((openTask) => (
            <li key={openTask.TaskID}>
              <div className="smallGridContainer">
                <div className="smallGridItem">
                  <div className="title">
                    {openTask.TaskName}
                    <button>
                      <BiEdit />
                    </button>
                  </div>
                  <div className="smallGridItem">
                    <p>
                      Assigned to: {openTask.FirstName} {openTask.LastName}
                    </p>
                    <p>Due date: {openTask.DueDate}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="content2b">
        Awaiting Approval
        <ul className="ulB">
          <Link to="/taskApproval">
            <li className="liB">TaskA</li>
          </Link>
          <Link to="/taskApproval">
            {" "}
            <li className="liB">TaskB</li>
          </Link>
        </ul>
      </div>

      <div className="content3b">
        Completed Tasks
        <ul className="ulB">
          {closedTasks.map((closedTask) => (
            <li key={closedTask.TaskID}>
              <div className="smallGridContainer">
                <div className="smallGridItem">
                  <div className="title">
                    {closedTask.TaskName}
                    <button>
                      <BiEdit />
                    </button>
                  </div>
                  <div className="smallGridItem">
                    <p>
                      Assigned to: {closedTask.FirstName} {closedTask.LastName}
                    </p>
                    <p>Due date: {closedTask.DueDate}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button>
        <a href={"/createTask?project=" + projectID}>Add new task</a>
      </button>
    </div>
  );
}
export default ProjectAdmin;
