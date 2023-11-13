import {Link} from 'react-router-dom';
import graphic from './graphic.png';
import { useHistory } from "react-router-dom";
import './App.css';

export default function Home() {
  const history = useHistory();

  if (document.cookie) {
    history.push("/landing");
  }
  return (
    <div className="kTitleContainer">
      <div>
        <header className="kTitle">Student Group Project Manager</header>

        {/* <FontAwesomeIcon icon={faFolderOpen} /> */}
      </div>
      <div className="kContainer">
        <img className="kGraphic" src={graphic} />
        <div className="kSlogan">
          organize <br /> collaborate <br /> create <br />
          <button className="klButton">
            <Link to="/signup" className="klButton">Sign up now!</Link>
          </button>
        </div>

        <div className="kContainer"></div>
      </div>
    </div>
  );
}