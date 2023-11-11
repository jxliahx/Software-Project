import React from 'react';
import './projectUser.css';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
 


function ProjectUser() {
    return (
     <div className='container'>
      
      <NavigationBar />
     
      
      <div className='nav'> Example Project 
      
       </div>

       <div className = 'content1'> Members
       <section> 
       <ul>
        <li>Member1</li>
        <li>Member2</li>
        </ul>
        </section>
        </div>

        <div class="main">
    <div class="title">Current Tasks</div>
    <div class="smallGridContainer">
        <div class="smallGridItem">
          <div className='title'>Item 1</div> 
          <p>Assigned to:</p>
          <p>Due date:</p>
          </div>
        <div class="smallGridItem">
        <div className='title'>Item 2</div> 
          <p>Assigned to:</p>
          <p>Due date:</p>
          </div>
          <div class="smallGridItem">
          <div className='title'>Item 3</div> 
          <p>Assigned to:</p>
          <p>due date:</p>
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
  export default ProjectUser;