import React from 'react';
import NavigationBar from './NavigationBar'; /* Add this at the top of your app.js file*/

function app() {
    return (
      <div className='page'>
        <NavigationBar />   /* Add this inside your app function*/
       
      </div>
    );
  }
  export default app;