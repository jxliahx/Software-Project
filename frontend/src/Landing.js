import "./landing.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar"; /* Add this at the top of your app.js file*/
import { useHistory } from "react-router-dom";
import axios from "axios";

function Landing() {
  const history = useHistory();
  axios.defaults.withCredentials = true;
  const [user, setUser] = useState([]);
  const [padmins, setPadmins] = useState([]);
  const [projects, setProjects] = useState([]);
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
      .get("http://localhost:5000/api/users/admin")
      .then((result) => {
        setPadmins(result.data);
        //console.log(padmins);
      })
      .catch((err) => console.log(err));
  }, [padmins]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/memberof")
      .then((result) => {
        setProjects(result.data);
        //console.log(projects);
      })
      .catch((err) => console.log(err));
  }, [projects]);
  return (
    <div className="container-landing">
      <div className="sidebar-landing">
        <NavigationBar />
      </div>

      <div className="nav-landing">
        {" "}
        Welcome {user.FirstName} {user.LastName}!
      </div>

      <div className="main-landing">
        {" "}
        Upcoming Deadlines
        <ul className="list-landing">
          <section class="deadlines-landing">
            <li>Project1</li>
            <li>Project2</li>
          </section>
        </ul>
      </div>

      <div className="content1-landing">
        {" "}
        Current Projects
        <ul className="list-landing">
          <section class="currProjacts-landing">
            {" "}
            My Projects:
            {padmins.map((padmin) => (
              <li key={padmin.ProjectID}>
                <a
                  href={
                    "/ProjectAdmin?projectID=" +
                    padmin.ProjectID +
                    "&projectName=" +
                    padmin.ProjectName
                  }
                >
                  {padmin.ProjectName}
                </a>
              </li>
            ))}
          </section>
        </ul>
        <ul className="list-landing">
          <section class="shared-landing">
            {" "}
            Shared With Me:
            {projects.map((project) => (
              <li key={project.ProjectID}>
                <a
                  href={
                    "/ProjectUser?projectID=" +
                    project.ProjectID +
                    "&projectName=" +
                    project.ProjectName
                  }
                >
                  {project.ProjectName}
                </a>
              </li>
            ))}
          </section>
        </ul>
      </div>
      <div className="content2-landing">content2</div>
    </div>
  );
}
export default Landing;
