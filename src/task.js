import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './KFstyle.css';
import NavigationBar from './NavigationBar';
export default function Task() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

   
    return (
        <div class="Container3">
        <h1 class="title">Example Project: Task 1</h1>
        <NavigationBar/>
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