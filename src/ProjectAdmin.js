import React from 'react';
import './ProjectAdmin.css';
import { BiEdit } from "react-icons/bi";
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
 
function ProjectAdmin() {
    return (
     <div className='container'>
      <NavigationBar />

      
      <div className='nav'> Example Project 
      
      <button3>< BiEdit/></button3>
      
       </div>

       <div className = 'content1'> Members 
       <button1>< BiEdit/></button1>
       <section> 
       <ul>
        <li>Member1</li>
        <li>Member2</li>
        </ul>
        </section>
        <button2>Send Invitation</button2>
        </div>
        
        <div class="main">
        <button4>< BiEdit/></button4>
    <div class="title">Current Tasks</div>
    <div class="smallGridContainer">
        <div class="smallGridItem">
        
          <div className='title'>Item 1  <button5>< BiEdit/></button5></div> 
          <p>Assigned to:</p>
          <p>Due date:</p>
          </div>
        <div class="smallGridItem">
        <div className='title'>Item 2<button5>< BiEdit/></button5></div> 
        <p>Assigned to:</p>
          <p>Due date:</p>
          </div>
          <div class="smallGridItem">
          <div className='title'>Item 3 <button5>< BiEdit/></button5></div> 
          <p>Assigned to:</p>
          <p>Due date:</p>
          </div>
    </div>
</div>
        
        
      
 
        

        <div className='content2'>Awaiting Approval
        <ul>
        <li>TaskA</li>
        <li>TaskB</li>
        </ul>
        </div>

        <div className='content3'>Completed Tasks
        <ul>
        <li>TaskC</li>
        <li>TaskD</li>
        </ul>
        </div>
     </div>
    );
  }
  export default ProjectAdmin;