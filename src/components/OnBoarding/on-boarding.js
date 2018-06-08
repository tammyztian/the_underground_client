import React from 'react';
import RegisterForm from './register-form';
import Header from '../Utils/header';
import { BoardingContent } from './boarding-content';


export default function OnBoarding(props) {
   
    return (
        <div className="containter-fluid onboard-page">
            <div className="on-boarding-container">
            </div>
            <Header />
            <BoardingContent/>
            <RegisterForm />
        </div>
    );
}
