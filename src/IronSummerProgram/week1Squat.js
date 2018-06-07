import React from 'react';
import {connect} from 'react-redux';
import {updateProgramRecord} from '../actions/program';
import {getProgram} from '../actions/program';


class SquatDay1 extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProgram());
  }
  
  onClick() {
    console.log(this.props.day);
    let nextDay = this.props.day + 1;
    return this.props
     .dispatch(updateProgramRecord(nextDay))
   }
  

  render() {
   if (this.props.loading) {
     return <p> Loading </p>
   }
    let rpeHeavy = this.props.squat * .94;
    let rpeSquat_3x5 = this.props.squat * .73;
    let rpe6Squat_3x6 = this.props.squat * .67;

    const requiredWorkout = 
      <ul className="required-list"> 
        <li> Competition Paused Squat for 1x3 @ {rpeHeavy.toFixed()}</li>
        <li> Specialty Squat Bar for 3x5 @ {rpeSquat_3x5.toFixed()} </li>
        <li> Box Squat for 3x5 @ {rpeSquat_3x5.toFixed()}</li>
        <li> Your choice of abs workout </li>
               
      </ul>
  const optionalWorkout = 
    <ul className="extra-list"> 
        <li> Dumbell Lunges for 3x8 @  your choice of Light weights</li>
        <li> Front Squat for 3x6 @ </li>
        <li> GHD Ham Raises 3x5 </li>
      </ul>
  
      return (
        <div className="program-container">
              <h3>Let's get in </h3>
              {requiredWorkout}
              <h3> If you gotta push yourself </h3>
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
  squat: state.lifts.squat,
  loading: state.lifts.loading
})

export default connect(mapStateToProps)(SquatDay1)