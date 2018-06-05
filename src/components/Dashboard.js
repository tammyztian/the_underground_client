import React from 'react';
import Lifts from './lifts';
import SquatDay1 from '../IronSummerProgram/week1Squat';
import BenchDay1 from '../IronSummerProgram/week1Bench';
import DeadliftDay1 from '../IronSummerProgram/week1Deadlift';


export function Dashboard (){
    if (!this.props.auth) return <Redirect to="/" />;

    if (this.props.day === 0) 
        return 
            <div className="Dashboard">
                <Lifts /> 
                <SquatDay1 />
            </div>
    
    if (this.props.day === 1) 
    return 
        <div className="Dashboard">
            <Lifts /> 
            <BenchDay1 />
        </div>

    if (this.props.day === 2) 
        return 
            <div className="Dashboard">
                <Lifts /> 
                <DeadlifthDay1 />
            </div>

    return (
          <div>
              <Lifts />
              
          </div>
      );
}



// i

// export function LandingPage(props) {
//     // If we are logged in redirect straight to the user's dashboard
//     if (props.loggedIn) {
//         return <Redirect to="/lifts" />;
//     }

//     return (
//         <div className="home">
//             <h2>Welcome to the Underground</h2>
//             <LoginForm />
//             <Link to="/register">Register</Link>
//         </div>
//     );
// }

const mapStateToProps = state => ({
    auth: state.auth.authToken, 
    user: state.auth.curretUser,
    program: state.progarm.progarm,
    day: state.program.day,
    squat: state.lifts.squat,
    loading: state.lifts.loading

});

export default connect(mapStateToProps)(Dashboard);
