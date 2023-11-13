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
      <h2>Task Invitation</h2>
      {invitationAccepted ? (
        <p>Invitation Accepted!</p>
      ) : invitationDeclined ? (
        <p>Invitation Declined!</p>
      ) : (
        <div>
          <p><div className='icon'>< BsListTask /></div>
            You've been assigned to XXXXX task.
          <div className="button-container">
            <button onClick={handleAcceptInvitation}>< AiOutlineCheckCircle /></button> 
            <button onClick={handleDeclineInvitation} className="decline-button"> < MdOutlineCancel /></button>
          </div>
          </p>
        </div>
      )}
    </div>
  );
}

export default TaskForm;