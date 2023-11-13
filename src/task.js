import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
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

   
    return (
        <div class="Container3">
        <h1 class="title">Example Project: Task 1</h1>
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
        <div class="id">
        <div class="instructions">
            <h2>Instructions</h2>
            <div class="i">
            <form></form>
            </div>
        </div>
        <div class="dates">
        <p>Date Assigned: </p>
        <p>Date Due: </p>
        </div>
        </div>
        <div class="fileUpload">
            <h3>File Upload</h3>
            <div class="fileContainer" {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop files here or click to browse.</p>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
            <button class="approve">Submit for Approval</button>
        </div>
        
        </div>
    )
}