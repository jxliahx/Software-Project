import React from 'react';
import SenderForm from './SenderForm';
import ReceiverForm from './ReceiverForm';
import './Invitation.css'
import NavigationBar from './NavigationBar';

function Invitation() {
  return (
    <div className='page'>
      <NavigationBar /> 
      <SenderForm />
      <ReceiverForm />
      <TaskInvitation />
    </div>
  );
}

export default Invitation;
