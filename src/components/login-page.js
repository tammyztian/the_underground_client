import React from 'react';
import LoginForm from'./login-form';
import Header from './header';

export function LoginPage(props) {
   
    return (
        <div className="lifting-prep-container">
          <Header />
          <LoginForm />
        </div>
    );
}
