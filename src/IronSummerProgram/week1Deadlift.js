import React from 'react';
import {connect} from 'react-redux';
import putDay from ''


class DeadliftDay1 extends React.Component {
  
  onClick() {
   let nextDay = this.props.day + 1;
   return this.props
    dispatchEvent(putDay(nextDay))
  }
 
  render() {
   if (this.props.loading) {
     return <p> Loading </p>
   }
    let rpeHeavy = this.props.deadlift * .94;
    let rpeSquat_3x5 = this.props.deadlift* .73;
    let rpe6Squat_3x6 = this.props.deadlift * .67;

    const requiredWorkout = 
      <ul> 
        <li> Competition deadlift work up to Heavy 1x3 @ {rpeHeavy.toFixed()}</li>
        <li> Banded deadlift 3x3 @ {rpeSquat_3x5.toFixed()} </li>
        <li> Bent over rows for 3x5 @ {rpeSquat_3x5.toFixed()}</li>
        <li> Your choice of abs workout </li>
               
      </ul>
  const optionalWorkout = 
      <ul> 
        <li> Dumbell Rows for 3x6 @  your choice of heavy weights</li>
        <li> Barbell curls for 4x8 @ your choice of heavy weights</li>
        <li> Dumbell Hammer curls 3x8 @ your choice of heavvy weights </li>
      </ul>
  
      return (
        <div className="lifts-container">
              <h2>Today's Workout: Deadlift Day</h2>
              <h3>Let's get in </h3>
              {requiredWorkout}
              <h3> Feelin' good? </h3>
              {optionalWorkout}
              <button 
        </div>
      )
    }
  }
  

const mapStateToProps = state => ({

  deadlift: state.lifts.deadlift,
  loading: state.lifts.loading
})

export default connect(mapStateToProps)(DeadliftDay1)