import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskWork = () => {
  //Sample set of data for presentation
  const values = {
    taskName: "Sample taskName",
    projectName: "Sample projectName",
    description: "Sample description",
    assignDate: "2023-10-10",
    dueDate: "2023-11-13",
    isComplete: false,
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 taskPage">
      <div className="p-3 rounded justify-content-center align-items-center w-25 border taskForm">
        <div>
          <h2>{values.projectName}</h2>
        </div>
        <div>
          <h3>{values.taskName}</h3>
          <br />
          <p>{values.description}</p>
          <span>Assign Date:</span>
          <input type="text" value={values.assignDate}></input>
          <br />
          <span>Due Date:</span>
          <input type="text" value={values.dueDate}></input>
        </div>
        <div>
          <form action="" method="POST">
            <input type="file"></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskWork;
