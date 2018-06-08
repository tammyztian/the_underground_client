import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import Header from './header';
import OnBoarding from './on-boarding';

export class LandingPage extends React.Component {   
    render (){
        if (this.props.authToken !== null) {
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
