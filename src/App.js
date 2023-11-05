import logo from './logo.svg';
//import graphic from './sample.jpg'
import graphic from './graphic.png'
import './App.css';
import createPage from './createPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route } from "react-router-dom"
import createPage from './createPage'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (

    <div className='App'>
      <Routes>
        {/* this line of code is commented out for now 
            once we have the Homepage function done, we can uncomment
            the path = "/" means that this will be the page that is rendered first when we run it
        <Route path = "/" element = {<Homepage/>} />
        */}
        <Route path = '/createPage' element = {<createPage/>} />
      </Routes>
    </div>

    // move this code into homepage.js
    // <div className='TitleContainer'> 
    //   <div >
    //   <header className='Title'>Student Group Project Manager</header>
      
    //   {/* <FontAwesomeIcon icon={faFolderOpen} /> */}
    // </div>
    // <div className='Container'>
    //   <img className = 'Graphic' src={graphic} />
    //   <div className='Slogan'>
    //     organize <br /> collaborate <br /> create <br />
    //     <button className='Button' >Sign up now!</button>
    //   </div>

    // <div className='Container'>
      
    // </div>
      
    // </div>
    // </div>

  );
}

export default App;
