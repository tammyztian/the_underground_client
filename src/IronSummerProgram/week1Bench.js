import React from 'react';
import {connect} from 'react-redux';
import {updateProgramRecord} from '../actions/program'
import {getProgram} from '../actions/program'
 

class BenchDay1 extends React.Component {
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
    let rpeHeavy = this.props.bench * .94;
    let rpeSquat_3x5 = this.props.bench * .73;
    let rpe6Squat_3x6 = this.props.bench * .67;

    //move to an object in server

    const requiredWorkout = 
            <ul className="required-list"> 
                <li> Competition Paused Bench Press work up to heavy 1x3 @ {rpeHeavy.toFixed()}</li>
                <li> Specialty Bench Bar for 4x6 @ {rpeSquat_3x5.toFixed()} </li>
                <li> Variety Bench Press 4x4 @ {rpeSquat_3x5.toFixed()}</li>
                <li> Your choice of abs workout </li>
            </ul>

    const extraWorkout = 
      <ul className="extra-list">
          <li> Dumbell Lunges 3x8 @ your choice of light weights </li>
          <li> Tricept Pulldowns 3x8 @ Moderate </li>
          <li> Dips 4x8 </li>
      </ul>

  
      return (
        <div className="program-container">
              <h2>Today's Workout: Bench Day</h2>
              <h3> Let's get in </h3>
              {requiredWorkout}
              <h3> Still got some in ya? </h3>
              {extraWorkout}
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
  bench: state.lifts.bench,
  loading: state.lifts.loading
})

export default connect(mapStateToProps)(BenchDay1)