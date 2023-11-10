import React, { useState } from 'react';

function ReceiverForm() {
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
      <h2>Accept Invitation</h2>
      {invitationAccepted ? (
        <p>Invitation Accepted!</p>
      ) : invitationDeclined ? (
        <p>Invitation Declined!</p>
      ) : (
        <div>
          <p>You've been invited to join the  XXXXX project.
          <div className="button-container">
            <button onClick={handleAcceptInvitation}>Accept</button> 
            <button onClick={handleDeclineInvitation} className="decline-button"> Decline</button>
          </div>
          </p>
        </div>
      )}
    </div>
  );
}

export default ReceiverForm;

