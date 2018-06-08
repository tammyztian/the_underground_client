import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';


import {refreshAuthToken,  clearAuth } from '../actions/auth';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './Dashboard';
import WeightForm from './lifting-experience';
import {LoginPage} from './login-page';
import OnBoarding from './on-boarding';
import { LiftingPrepContainer } from './lifting-prep-container';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
            //this.userTimeOut();
            
            
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            //this.clearUserTimeOut();
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    // userTimeOut(){
    //     this.userTimeOut = setInterval(() => this.props.dispatch(clearAuth()),
    //        24 * 6 * 60 * 10 * 1000 // 1 day
    //     );   
    // }

    // clearUserTimeOut(){
    //     if (!this.userTimeOut){
    //         return;
    //     }
    //     clearInterval(this.userTimeOut);
    // }

    // userTimeOutNotification(){
    //     this.userTimeOutNotification = setInterval(() =>
    //     alert('you will be logged off in one min'), 500)
    // }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 10 * 1000 * 12 // 12 hours
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <HeaderBar />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/lifts" component={LiftingPrepContainer} />
                <Route exact path="/register" component={OnBoarding} />
                <Route exact path="/login" component={LoginPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
