import React from 'react';
import {connect} from 'react-redux';

import {updateProgramRecord} from '../../../actions/program';
import {getProgram} from '../../../actions/program';
import {viewFormTrue} from '../../../actions/viewform';

class DeadliftDay1 extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProgram());
    
  }
  

  onClick(event) {
    let nextDay = this.props.day + 1;
    if (nextDay > 2){
      nextDay = 0;
    }
    // console.log(nextDay);
    this.props.dispatch(updateProgramRecord(nextDay))
    this.props.dispatch(viewFormTrue());
   }
  
  render() {
   if (this.props.loading) {
     return <p> Loading </p>
   }



  //  if (this.props.){
  //   return <Redirect to="/lifts" />
  // }

    let rpeHeavy = this.props.deadlift * .94;
    let rpe_3x5 = this.props.deadlift* .73;
    let rpe6_3x6 = this.props.deadlift * .67;

    const requiredWorkout = 
      <ul className="required-list"> 
        <li> Competition deadlift work up to Heavy 1x3 @ {rpeHeavy.toFixed()}</li>
        <li> Banded deadlift 3x3 @ {rpe_3x5.toFixed()} </li>
        <li> Bent over rows for 3x5 @ {rpe6_3x6.toFixed()}</li>
        <li> Your choice of abs workout </li>
               
      </ul>
  const optionalWorkout = 
      <ul className="extra-list"> 
        <li> Dumbbell Rows for 3x6 @  your choice of heavy weights</li>
        <li> Barbell curls for 4x8 @ your choice of heavy weights</li>
        <li> Dumbbell Hammer curls 3x8 @ your choice of heavvy weights </li>
      </ul>
  
      return (
        <div className="program-container">
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

  viewForm: state.viewForm.viewForm,

  program: state.program.program,
  day: state.program.day,

  deadlift: state.lifts.deadlift,
  loading: state.lifts.loading
})

export default connect(mapStateToProps)(DeadliftDay1)