import { useState } from 'react';
import { createPortal } from 'react-dom';
import ReactDOM from "react-dom";
import Modal from "../components/taskModal";
import './taskModal.css'

const TaskModalPortal = ({ visible, onClose }) => {
    const handleClick = (event) => event.stopPropagation();
  
    // Don't render if visible equals false
    if (!visible) return null;
  
    return ReactDOM.createPortal(
      <section className="overlay" onClick={onClose}>
        <article className="modal" onClick={handleClick}>
          <header>
          <textarea 
                className='TitleText'
                name="projectTitle"
                placeholder={"Add a Task Title"}
                rows={1}
            />
          </header>
          <main>
          <textarea 
                className='TaskText'
                name="task"
                placeholder={"Enter task description here"}
                rows={10}
            />
          </main>
        </article>
        <button className='ModalButton' onClick={onClose}>Create</button>
      </section>,
      document.body
    );
  };
  
  export default TaskModalPortal;