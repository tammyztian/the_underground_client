import React from 'react';
import {connect} from 'react-redux';

import {updateProgramRecord} from '../../../actions/program';
import {getProgram} from '../../../actions/program';
import {viewFormTrue} from '../../../actions/viewform';


class SquatDay1 extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProgram());
  }
  
  onClick(event) {
    let nextDay = this.props.day + 1;
    this.props.dispatch(updateProgramRecord(nextDay))
    this.props.dispatch(viewFormTrue());
   }
  

  render() {
   if (this.props.loading) {
     return <p> Loading </p>
   }

  //  if (this.props.submit){
  //    console.log('should redirect to lifts')
  //   return <Redirect to="/lifts" />
    
  // }
    let rpeHeavy = this.props.squat * .94;
    let rpeSquat_3x5 = this.props.squat * .73;
    let rpe6_3x6 = this.props.squat * .67;

    const requiredWorkout = 
      <ul className="required-list"> 
        <li> Competition Paused Squat for 1x3 @ {rpeHeavy.toFixed()}</li>
        <li> Specialty Squat Bar for 3x5 @ {rpeSquat_3x5.toFixed()} </li>
        <li> Box Squat for 3x5 @ {rpe6_3x6.toFixed()}</li>
        <li> Your choice of abs workout </li>
               
      </ul>
  const optionalWorkout = 
    <ul className="extra-list"> 
        <li> Dumbbell Lunges for 3x8 @  your choice of Light weights</li>
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

  viewForm: state.viewForm.viewForm,

  program: state.program.program,
  day: state.program.day,

  squat: state.lifts.squat,
  loading: state.lifts.loading
})

export default connect(mapStateToProps)(SquatDay1)