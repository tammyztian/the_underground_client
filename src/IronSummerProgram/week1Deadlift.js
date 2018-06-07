import React from 'react';
import {connect} from 'react-redux';
import {updateProgramRecord} from '../actions/program';
import {getProgram} from '../actions/program';


class DeadliftDay1 extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProgram());
  }
  

  onClick() {
   let nextDay = this.props.day + 1;
   return this.props
    .dispatch(updateProgramRecord(nextDay))
  }
 
  render() {
   if (this.props.loading) {
     return <p> Loading </p>
   }
    let rpeHeavy = this.props.deadlift * .94;
    let rpeSquat_3x5 = this.props.deadlift* .73;
    let rpe6Squat_3x6 = this.props.deadlift * .67;

    const requiredWorkout = 
      <ul className="required-list"> 
        <li> Competition deadlift work up to Heavy 1x3 @ {rpeHeavy.toFixed()}</li>
        <li> Banded deadlift 3x3 @ {rpeSquat_3x5.toFixed()} </li>
        <li> Bent over rows for 3x5 @ {rpeSquat_3x5.toFixed()}</li>
        <li> Your choice of abs workout </li>
               
      </ul>
  const optionalWorkout = 
      <ul className="extra-list"> 
        <li> Dumbell Rows for 3x6 @  your choice of heavy weights</li>
        <li> Barbell curls for 4x8 @ your choice of heavy weights</li>
        <li> Dumbell Hammer curls 3x8 @ your choice of heavvy weights </li>
      </ul>
  
      return (
        <div className="program-container">
              <h2>Today's Workout: Deadlift Day</h2>
              <h3>Let's get in </h3>
              {requiredWorkout}
              <h3> Feelin' good? </h3>
              {optionalWorkout}
              <button 
                type="button" 
                className="completed-button"
                onClick={this.onClick.bind(this)}
              > Completed </button>
        </div>
      )
    }
  }
  

const mapStateToProps = state => ({
  authToken: state.auth.authToken, 
  user: state.auth.curretUser,
  program: state.program.program,
  day: state.program.day,
  deadlift: state.lifts.deadlift,
  loading: state.lifts.loading
})

export default connect(mapStateToProps)(DeadliftDay1)