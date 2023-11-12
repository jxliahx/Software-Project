import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
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
    { label: 'Home', url: '/Landing' },
    { label: 'Create Projects', url: '/createPage' },
    { label: 'Invitations', url: '/Invitation' },
    { label: 'Calendar', url: '/Calendar' },
    { label: 'Signout', url: '/home' },
  ];

  return (
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
  );
};

export default NavigationBar;
