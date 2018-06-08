import React from 'react';
import LoginForm from'./login-form';
import Header from '../Utils/header';
import {Link} from 'react-router-dom';


export function LoginPage(props) {
   
    return (
        <div className="lifting-prep-container">
          <Header />
          <LoginForm />
          <Link to="/"> Register </Link>
        </div>
    );
}
