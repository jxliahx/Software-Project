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
    <button className='Button' ><Link to="/signup">Sign up now!</Link></button>
       </div>

     <div className='Container'>
      
    </div>
      
    </div>
    </div>
    )
}