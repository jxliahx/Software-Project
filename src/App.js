import logo from './logo.svg';
//import graphic from './sample.jpg'
import graphic from './graphic.png';
import Home from './home';
import Login from './login';
import Signup from './signup';
import TaskApproval from './taskApproval';
import Task from './task';
import Calendar1 from './Calendar';
import Invitation from './Invitation';
import Landing from './Landing';
import ProjectUser from './ProjectUser'; 
import ProjectAdmin from './ProjectAdmin'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <Route path="/task">
        < Task/>
      </Route>
      <Route path="/taskApproval">
        < TaskApproval />
      </Route>
      <Route path="/Invitation">
        <Invitation/>
      </Route>
      <Route path='/Calendar'>
        <Calendar1/>
      </Route>
      <Route path='/Landing'>
        <Landing/>
      </Route>
      <Route path='/projectUser'>
        <ProjectUser/>
      </Route>
      <Route path='/projectAdmin'>
        <ProjectAdmin/>
      </Route>
    </Switch>
    </div>
    </Router>


  );
}

export default App;
