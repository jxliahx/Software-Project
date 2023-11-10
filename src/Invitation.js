import React from 'react';
import SenderForm from './SenderForm';
import ReceiverForm from './ReceiverForm';
import './Invitation.css'
import NavigationBar from './NavigationBar';

function App() {
  return (
    <div className='page'>
      <NavigationBar /> 
      <SenderForm />
      <ReceiverForm />
    </div>
  );
}

export default App;
