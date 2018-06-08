import React from 'react';
import '../../styles/header.css';
import logo from '../../styles/tug_logo.png';

export default function Header(props) {
    
    return (
      <div className="jumbotron">
          <img src={logo} alt="The Underground"/>
      </div>
    );
}



// export default connect(mapStateToProps)(LandingPage);
