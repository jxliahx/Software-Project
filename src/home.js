import {Link} from 'react-router-dom';
import graphic from './graphic.png';
import './App.css';

export default function Home(){
    return (
       < div className='TitleContainer'> 
     <div >
       <header className='Title'>Student Group Project Manager</header>
      
      {/* <FontAwesomeIcon icon={faFolderOpen} /> */}
    </div>
     <div className='Container'>
      <img className = 'Graphic' src={graphic} />
      <div className='Slogan'>
        organize <br /> collaborate <br /> create <br />
        <Link to="/signup"><button className='Button' >Sign up now!</button></Link>
       </div>

     <div className='Container'>
      
    </div>
      
    </div>
    </div>
    )
}