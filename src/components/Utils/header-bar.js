import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';


import '../../styles/logout.css'
export class HeaderBar extends React.Component {
    logOut() {
        clearAuthToken();
        return this.props.dispatch(clearAuth())
        
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn !== null) {
            logOutButton = (
                <button className="button" id="logout" onClick={() => this.logOut()}>Log out</button>
            );
        }

        
        return (
            <div className="header-bar">
              <div className="log-out-button">
                {logOutButton}
              </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser,
    viewForm: state.viewForm.viewForm
});

export default connect(mapStateToProps)(HeaderBar);
