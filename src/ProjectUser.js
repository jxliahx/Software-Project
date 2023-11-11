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

        <div className='main'>Current Tasks
   
      
 
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