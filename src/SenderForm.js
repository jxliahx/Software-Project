import React, { useState } from 'react';
import {BiMailSend} from "react-icons/bi";

function SenderForm() {
  const [username, setUsername] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [invitationSent, setInvitationSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can use the 'username' and 'projectTitle' values as needed.
    // For example, you can make an API request to send the invitation.

    // After submitting, you might want to reset the form.
    setUsername('');
    setProjectTitle('');
    setInvitationSent(true);
  };

  return (
    <div className="form-container">
      <h2>Send Invitation</h2>
      {invitationSent ? (
        <p>Invitation sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"></label>
            <select className="senderSelect"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            >
              <option value="">Select Username</option>
              <option value="User1">Lauren</option>
              <option value="User2">Nafisa</option>
              <option value="User3">Julia</option>
            </select>
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="projectTitle"></label>
            <select className="senderSelect"
              id="projectTitle"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            >
              <option value="">Select Project Title</option>
              <option value="Project1">Project1</option>
              <option value="Project2">Project2</option>
              <option value="Project3">Project3</option>
            </select>
          </div>
          <button className="inviteButton" type="submit"><BiMailSend /></button>
        </form>
      )}
    </div>
  );
}

export default SenderForm;
