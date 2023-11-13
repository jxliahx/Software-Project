/*import CheckIcon from '@mui/icons-material/Check';*/
/*import CloseIcon from '@mui/icons-material/Close';*/
import React, { useState } from 'react';
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
    <div class="Container2">
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
        <h1 class="t1">Task 1</h1>
        <form>
            <div class="taskDiv">
                <h2 class="task">Completed by: Member 1</h2>
                <div class="files">
                <p class="f">Files</p>
                <p>File 1</p>
                <p>File 2</p>
                </div>
            </div>
            <div class="yn">
            <button class="yes"></button><button class="no"></button>
            </div>
        </form>
    </div>
)
}