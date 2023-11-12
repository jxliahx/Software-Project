import React, { useState } from 'react';
import {MdOutlineCancel} from "react-icons/md";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsListTask} from "react-icons/bs";

function TaskForm() {
  const [invitationAccepted, setInvitationAccepted] = useState(false);
  const [invitationDeclined, setInvitationDeclined] = useState(false);

  const handleAcceptInvitation = () => {
    // Here you can implement the logic for accepting the invitation, e.g., make an API request.

    // Assuming the invitation is successfully accepted, update the state.
    setInvitationAccepted(true);
  };

  const handleDeclineInvitation = () => {
    // Handle the decline invitation action here.
    setInvitationDeclined(true);
  };

  return (
    <div className="form-container">
      <h2><div className='icon'>< BsListTask /></div>Task Invitation</h2>
      {invitationAccepted ? (
        <p>Invitation Accepted!</p>
      ) : invitationDeclined ? (
        <p>Invitation Declined!</p>
      ) : (
        <p>
            You've been assigned to XXXXX task.
          <div className="button-container">
            <button className="inviteButton1" onClick={handleAcceptInvitation}>< AiOutlineCheckCircle /></button> 
            <button className="inviteButton1" onClick={handleDeclineInvitation}> < MdOutlineCancel /></button>
          </div>
          </p>
        
      )}
    </div>
  );
}

export default TaskForm;