
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './task.css';
import { useDropzone } from 'react-dropzone';
import axios from "axios";
export default function Task() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigation = (url) => {
    // Add logic here to navigate to the selected page (e.g., using React Router)
    console.log(`Navigating to: ${url}`);
    // You can use a router like React Router to handle the navigation.
  };

  const navigationLinks = [
    { label: 'Home', url: '/' },
    { label: 'Create Projects', url: '/about' },
    { label: 'Invitations', url: '/services' },
    { label: 'Calendar', url: '/contact' },
    { label: 'Signout', url: '/contact' },
  ];

  const searchParams = new URLSearchParams(window.location.search);
  const taskID = searchParams.get("taskID");
  /*const taskName = searchParams.get("taskName");*/
  const [Description, setDescription] = useState([]);
  const [DueDate, setDueDate] = useState([]);
  const [AssignDate, setAssignDate] = useState([]);
  const [taskName, setTaskName] = useState([]);
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
      .get("http://localhost:5000/api/tasks/TaskName/" + taskID)
      .then((result) => {
        setTaskName(result.data);
      })
      .catch((err) => console.log(err));
  }, [taskName]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks/Description/" + taskID)
      .then((result) => {
        setDescription(result.data);
      })
      .catch((err) => console.log(err));
  }, [Description]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks/AssignDate/" + taskID)
      .then((result) => {
        setAssignDate(result.data);
      })
      .catch((err) => console.log(err));
  }, [AssignDate]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks/DueDate/" + taskID)
      .then((result) => {
        setDueDate(result.data);
      })
      .catch((err) => console.log(err));
  }, [DueDate]);
   
    return (
        <div class="Container-task">
        <h1 class="title-task">Example Project: {taskName}</h1>
        <div className="navigation">
      <button onClick={toggleDropdown} className="dropdown-button">
        Menu
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} onClick={() => handleNavigation(link.url)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
        <div class="id-task">
        <div class="instructions-task">
            <h2 class="h2-task">Instructions</h2>
            <div class="i-task">
            <form>
              {Description}
            </form>
            </div>
        </div>
        <div class="dates-task">
        <p>Date Assigned: {AssignDate} </p>
        <p>Date Due: {DueDate} </p>
        </div>
        </div>
        <div class="fileUpload-task">
            <h3 class="h3-task">File Upload</h3>
            <div class="fileContainer-task" {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop files here or click to browse.</p>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
            <button class="approve-task">Submit for Approval</button>
        </div>
        
        </div>
    )
}