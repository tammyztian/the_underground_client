import React from 'react';
import './App.css';

import RegistrationForm from './register-form.js';

export default function User(props){
 // const user = <p>Are you ready for your workout today {props.user.name}!?</p>;

  
    return (
      <div className="App">
        <h1> Welcome to the Underground </h1>
        <RegistrationForm />
      </div>
    );
  
}


