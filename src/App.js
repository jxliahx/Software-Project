import logo from './logo.svg';
//import graphic from './sample.jpg'
import graphic from './graphic.png'
import './App.css';
import './KFstyle.css';
import Home from './home';
import Login from './login';
import Signup from './signup';
import TaskApproval from './taskApproval';
import Task from './task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    <Router>
    <div className='App'>
      <Switch>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route path="/login">
          < Login />
        </Route>
      <Route path="/signup">
          < Signup />
        </Route>
    </Switch>
    </div>
    </Router>

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
