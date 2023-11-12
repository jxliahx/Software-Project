import React from 'react';
import './projectUser.css';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
import { Link } from 'react-router-dom';


function ProjectUser() {
    return (
     <div className='container1'>
      
      <NavigationBar />
     
      
      <div className='nav1'> Example Project 
      
       </div>

       <div className = 'content1a'> Members
       <section className='sectionClassA'> 
       <ul className='ulClassA'>
        <li className='liFont1'>Member1</li>
        <li className='liFont1'>Member2</li>
        </ul>
        </section>
        </div>

        <div class="main1">
    <div class="title">Current Tasks</div>
    <div class="smallGridContainer">
       <Link to="/task"><div class="smallGridItem">
          <div className='title'>Item 1</div> 
          <p>Assigned to:</p>
          <p>Due date:</p>
          </div>
          </Link>
          <Link to="/task">
        <div class="smallGridItem">
        <div className='title'>Item 2</div> 
          <p>Assigned to:</p>
          <p>Due date:</p>
          </div>
          </Link> 
          <Link to="/task">
          <div class="smallGridItem">
          <div className='title'>Item 3</div> 
          <p>Assigned to:</p>
          <p>due date:</p>
          </div>
          </Link>
    </div>
</div>

        <div className='content2a'>Awaiting Approval
        <ul className='ulClassA'>
        <Link to="/taskApproval"><li className='liFont1'>TaskA</li></Link>
        <Link to="/taskApproval"><li className='liFont1'>TaskB</li></Link>
        </ul>
        </div>

        <div className='content3a'>Completed Tasks
        <ul className='ulClassA'>
        <li className='liFont1'>TaskC</li>
        <li className='liFont1'>TaskD</li>
        </ul>
        </div>
      

     
    
      


       

     </div>
    );
  }
  export default ProjectUser;