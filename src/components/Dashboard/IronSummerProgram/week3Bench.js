//for future implementation, will be formatted into db instead

import React from 'react';
import {connect} from 'react-redux';


class BenchDay3 extends React.Component {
  
 
  render() {
   if (this.props.loading) {
     return <p> Loading </p>
   }
    let rpeHeavy = this.props.bench * .94;
    let rpeSquat_3x5 = this.props.bench * .73;
    let rpe6Squat_3x6 = this.props.bench * .67;

    const requiredWorkout = 
            <ul> 
                <li> Competition Paused Bench Press work up to heavy 1x3 @ {rpeHeavy.toFixed()}</li>
                <li> Specialty Bench Bar for 4x6 @ {rpeSquat_3x5.toFixed()} </li>
                <li> Variety Bench Press 4x4 @ {rpeSquat_3x5.toFixed()}</li>
                <li> Your choice of abs workout </li>
            </ul>

    const extraWorkout = 
      <ul>
          <li> Dumbell Lunges 3x8 @ your choice of light weights </li>
          <li> Tricept Pulldowns 3x8 @ Moderate </li>
          <li> Dips 4x8 </li>
      </ul>

  
      return (
        <div className="lifts-container">
              <h2>Today's Workout: Bench Day</h2>
              <h3> Let's get in </h3>
              {requiredWorkout}
              <h3> Still got some in ya? </h3>
              {extraWorkout}
        </div>
      )
    }
  }
  

const mapStateToProps = state => ({
  bench: state.lifts.bench,
  loading: state.lifts.loading
})

export default connect(mapStateToProps)(BenchDay3)