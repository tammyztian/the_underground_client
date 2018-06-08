//for future implementation, will be formatted into db instead

import React from 'react';
import {connect} from 'react-redux';


class SquatDay3 extends React.Component {
  

 
  render() {
   if (this.props.loading) {
     return <p> Loading </p>
   }
    let rpeHeavy = this.props.squat * .94;
    let rpeSquat_3x5 = this.props.squat * .73;
    let rpe6Squat_3x6 = this.props.squat * .67;

    const requiredWorkout = 
      <ul> 
        <li> Competition Paused Squat for 1x3 @ {rpeHeavy.toFixed()}</li>
        <li> Specialty Squat Bar for 3x5 @ {rpeSquat_3x5.toFixed()} </li>
        <li> Box Squat for 3x5 @ {rpeSquat_3x5.toFixed()}</li>
        <li> Your choice of abs workout </li>
               
      </ul>
  const optionalWorkout = 
      <ul> 
        <li> Dumbell Lunges for 3x8 @  your choice of Light weights</li>
        <li> Front Squat for 3x6 @ </li>
        <li> GHD Ham Raises 3x5 </li>
      </ul>
  
      return (
        <div className="lifts-container">
              <h2>Today's Workout: Squat Day</h2>
              <h3>Let's get in </h3>
              {requiredWorkout}
              <h3> If you gotta push yourself </h3>
              {optionalWorkout}
        </div>
      )
    }
  }
  

const mapStateToProps = state => ({

  squat: state.lifts.squat,
  loading: state.lifts.loading
})

export default connect(mapStateToProps)(SquatDay3)