import React from 'react';
import './landing.css';
import NavigationBar from './NavigationBar'; /* Add this at the top of your app.js file*/

function Landing() {
    return (
     <div className='container'>
      <div className='sidebar'>
      <NavigationBar />

      </div>
     
      
      <div className='nav'> Welcome User!
       </div>

       <div className = 'main'> Upcoming Deadlines
       <ul className='list'>
       <section className='sectionContent'> 
        <li className='liFont'>Project1</li>
        <li className='liFont'>Project2</li>
        </section>
        </ul>
       </div>

       <div className='content1'> Current Projects 
      
       <ul className='list'>
       <section className='sectionContent'> My Projects:
        <li className='liFont'>Project1</li>
        <li className='liFont'>Project2</li>
        </section>
        </ul>

        <ul className='list'>
       <section className='sectionContent'> Shared With Me:
        <li className='liFont'>Project3</li>
        <li className='liFont'>Project4</li>
        </section>
        </ul>
       </div>
       <div className='content2'>content2</div>
    
      


       

     </div>
    );
  }
  export default Landing;