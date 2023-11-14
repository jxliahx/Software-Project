/*import CheckIcon from '@mui/icons-material/Check';*/
/*import CloseIcon from '@mui/icons-material/Close';*/
import React, { useState } from 'react';
import './taskApproval.css';
export default function TaskApproval(){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleNavigation = (url) => {
      // Add logic here to navigate to the selected page (e.g., using React Router)
      console.log(`Navigating to: ${url}`);
      // You can use a router like React Router to handle the navigation.
    };
  
    const navigationLinks = [
      { label: 'Home', url: '/' },
      { label: 'Create Projects', url: '/about' },
      { label: 'Invitations', url: '/services' },
      { label: 'Calendar', url: '/contact' },
      { label: 'Signout', url: '/contact' },
    ];
  

return (
    <div class="Container-ta">
        <div className="navigation">
      <button onClick={toggleDropdown} className="dropdown-button">
        Menu
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} onClick={() => handleNavigation(link.url)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
        <h1 class="t1-ta">Task 1</h1>
        <form>
            <div class="taskDiv-ta">
                <h2 class="task-ta">Completed by: Member 1</h2>
                <div class="files-ta">
                <p class="f-ta">Files</p>
                <p>File 1</p>
                <p>File 2</p>
                </div>
            </div>
            <div class="yn-ta">
            <button class="yes-ta"></button><button class="no-ta"></button>
            </div>
        </form>
    </div>
)
}