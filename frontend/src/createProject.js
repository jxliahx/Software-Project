import React, { useState } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import "./createProject.css";
import { SearchBar } from "./Components/searchBar";
import { SearchResultsList } from "./Components/searchResultsList";
import { useHistory } from "react-router-dom";

function CreateProject() {
  const history = useHistory();
  const [value, setValue] = useState({ projectName: "" });
  let projectID = 0;
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/projects/add", value)
      .then((result) => {
        axios
          .get("http://localhost:5000/api/projects/detail/" + value.projectName)
          .then((result) => {
            projectID = result.data[0].ProjectID;
            history.push(
              "/ProjectAdmin?projectID=" +
                projectID +
                "&projectName=" +
                value.projectName
            );
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div> <NavigationBar/>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="TitleContainer">
          <header className="Title">Create a Project</header>
          <input
            className="createP"
            type="text"
            name="projectName"
            placeholder="Project Name"
            onChange={(e) =>
              setValue({ ...value, projectName: e.target.value })
            }
          ></input>
        </div>
        <input type="submit" value="Create" />
      </form>
    </div>
    </div>
  );
  
}

export default CreateProject;
