import React from 'react';
import './ProjectAdmin.css';
import { BiEdit } from "react-icons/bi";
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
import {Link} from 'react-router-dom';
 
function ProjectAdmin() {
    return (
     <div className='container2'>
      <NavigationBar />

      
      <div className='nav2'> Example Project 
      
      <button3>< BiEdit/></button3>
      
       </div>

       <div className = 'content1b'> Members 
       <button1>< BiEdit/></button1>
       <section className='sectionb'> 
       <ul className='ulB'>
        <li className='liB'>Member1</li>
        <li className='liB'>Member2</li>
        </ul>
        </section>
        <button2>Send Invitation</button2>
        </div>
        
        <div class="main2">
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
        
        
      
 
        

        <div className='content2b'>Awaiting Approval
        <ul className='ulB'>
        <Link to="/taskApproval"><li className='liB'>TaskA</li></Link>
        <Link to="/taskApproval"> <li className='liB'>TaskB</li></Link>
        </ul>
        </div>

        <div className='content3b'>Completed Tasks
        <ul className='ulB'>
        <li className='liB'>TaskC</li>
        <li className='liB'>TaskD</li>
        </ul>
        </div>
     </div>
    );
  }
  export default ProjectAdmin;