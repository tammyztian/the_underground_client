import React from 'react';
import Lifts from './lifts';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import SquatDay1 from '../IronSummerProgram/week1Squat';
import BenchDay1 from '../IronSummerProgram/week1Bench';
import DeadliftDay1 from '../IronSummerProgram/week1Deadlift';

class Dashboard extends React.Component {
   
  

    render (){
        if (this.props.authToken === null) return <Redirect to="/" />;
   
        if (this.props.day === 0) 
            return <div className="dashboard">
                    <Lifts /> 
                    <SquatDay1 />
                </div>
        
        if (this.props.day === 1) 
        return  <div className="dashboard">
                <Lifts /> 
                <BenchDay1 />
            </div>

        if (this.props.day === 2) 
            return <div className="dashboard">
                    <Lifts /> 
                    <DeadliftDay1 />
                </div>

        return (
            <div>
                <Lifts />
                
            </div>
        );
    };
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken, 
    user: state.auth.curretUser,
    program: state.program.program,
    day: state.program.day,
    squat: state.lifts.squat,
    loading: state.lifts.loading

});

export default connect(mapStateToProps)(Dashboard);
