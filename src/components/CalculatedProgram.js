import React from 'react';
import {connect} from 'react-redux';



class CalculatedProgram extends React.Component {
  

 
  render() {
  
    let rpeHeavy = this.props.squat * .94;
    let rpeSquat_3x5 = this.props.squat * .73;
    let rpe6Squat_3x6 = this.props.squat * .67;

    const workout = 
            <ul> 
                <li> Competition Paused Squat for 1x3 @ {rpeHeavy}</li>
                <li> Specialty Squat Bar for 3x5 @ {rpeSquat_3x5} </li>
                <li> Box Squat for 3x5 @ {rpeSquat_3x5}</li>
                <li> Your choice of abs workout </li>
                <li> Dumbell Lunges for 3x8 @ {rpe6Squat_3x6} </li>
                <li> Front Squat for 3x6 @ {rpe6Squat_3x6} </li>
              </ul>

  
      return (
        <div className="lifts-container">
              <h2>Today's Workout: Squat Day</h2>
              {workout}
        </div>
      )
    }
  }
  

const mapStateToProps = state => ({
  data: state.lifts,
  bench: state.lifts.bench,
  squat: state.lifts.squat,
  deadlift: state.lifts.deadlift
})

export default connect(mapStateToProps)(CalculatedProgram)