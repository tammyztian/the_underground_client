import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {updateProgramRecord} from '../../../actions/program';
import {getProgram} from '../../../actions/program';
import {viewFormTrue} from '../../../actions/viewform';

class BenchDay1 extends React.Component {
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

  //  if (this.props.viewCompleted){
  //   return <Redirect to="/lifts" />
  // }

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
  
  viewForm: state.viewForm.viewForm,

  program: state.program.program,
  day: state.program.day,

  bench: state.lifts.bench,
  loading: state.lifts.loading
})

export default connect(mapStateToProps)(BenchDay1)