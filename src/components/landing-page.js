import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import Header from './header';
import OnBoarding from './on-boarding';

export class LandingPage extends React.Component {
    // If we are logged in redirect straight to the user's dashboard
   
    render (){
        if (this.props.authToken) {
            return <Redirect to="/lifts" />;
        }
    return (
        <div className="landing-page">
            <OnBoarding />
            <Link to="/login">Login</Link>
        </div>
    );
    }
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken, 
    user: state.auth.curretUser,
});

export default connect(mapStateToProps)(LandingPage);
