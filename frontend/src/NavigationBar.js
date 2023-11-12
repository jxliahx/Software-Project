import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from "axios";

const NavigationBar = () => {
  const history = useHistory();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigation = (url) => {
    console.log(`Navigating to: ${url}`);
    // You can use a router like React Router to handle the navigation.
  };

  const navigationLinks = [
    { label: "Home", url: "/home" },
    { label: "Create Projects", url: "/createProject" },
    { label: "Invitations", url: "/Invitation" },
    { label: "Calendar", url: "/Calendar" },
    { label: "Signout", url: "/logout" },
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
