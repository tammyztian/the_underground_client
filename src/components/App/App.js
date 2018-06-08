import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';


import {refreshAuthToken } from '../../actions/auth';

///import HeaderBar from '../Utils/header-bar';
//developing log-out button^^
import LandingPage from '../LandingPage/landing-page';
import Dashboard from '../Dashboard/Dashboard';
import {LoginPage} from '../LoginPage/LoginPage';
import OnBoarding from '../OnBoarding/on-boarding';
import { InputNewRecordsPage } from '../NewWorkoutDayPage/InputRecords';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
          
            
            
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
       
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

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
                {/* <HeaderBar /> */}
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/lifts" component={InputNewRecordsPage} />
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

export default withRouter(connect(mapStateToProps)(App));
