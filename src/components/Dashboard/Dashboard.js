import React from 'react';
import Lifts from './lifts';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import '../../styles/dashboard.css';

import Header from '../Utils/header';
import SquatDay1 from './IronSummerProgram/week1Squat';
import BenchDay1 from './IronSummerProgram/week1Bench';
import DeadliftDay1 from './IronSummerProgram/week1Deadlift';

class Dashboard extends React.Component {
   
  

    render (){
        if (this.props.authToken === null) return <Redirect to="/" />;

        if (this.props.viewForm){
            console.log('submit should redirect to lifts')
            return <Redirect to="/lifts" />
          }

        if (this.props.day === 0) 
            return <div className="dashboard">
            <Header />
             <h2>Today's Workout: Squat Day</h2>
                    <Lifts /> 
                    <SquatDay1 />
                </div>
        
        if (this.props.day === 1) 
            return  <div className="dashboard">
                <Header />  
                <h2>Today's Workout: Bench Day</h2> 
                <Lifts /> 
                <BenchDay1 />
                </div>

        if (this.props.day === 2) 
            return <div className="dashboard">
                <Header />
                <h2>Today's Workout: Deadlift Day</h2>
                <Lifts /> 
                 <DeadliftDay1 />
                </div>

        return (
            <div>
                <Header />
                <Lifts />
                
            </div>
        );
    };
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken, 
    user: state.auth.curretUser,
    
    viewForm: state.viewForm.viewForm,

    submit: state.program.submit,
    day: state.program.day,
    squat: state.lifts.squat,
    loading: state.lifts.loading

});

export default connect(mapStateToProps)(Dashboard);
