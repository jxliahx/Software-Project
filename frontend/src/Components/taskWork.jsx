import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
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

  function eventhandling() {
    //navigate("/Home");
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 taskPage">
      <div className="container p-3 rounded justify-content-center align-items-center w-25 border taskForm">
        <div className="justify-content-center">
          <h2>{values.projectName}</h2>
        </div>
        <div className="justify-content-center">
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
            <label for="formFileLg" class="form-label">
              Upload your file here
            </label>
            <input
              class="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
            <button type="button" class="btn btn-success mt-10">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskWork;
