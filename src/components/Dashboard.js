import React from 'react'
import Lifts from './lifts'
//import CalculatedProgram from './CalculatedProgram'
export default class Dashboard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      benchDay: true,
      squatDay: false,
      deadliftDay: false,
      bench: null,
      squat : null,
      deadlift: null,

      }
  }
  //do a fetch request to get lifting data

  render() {
    //   if (benchDay){
    //   let todayBench = (this.state.bench) ? 
    //   this.state.bench * .85 : 45;
    // }

    //   else if(squatDay) {
    //   let todaySquat = (this.state.squat) ? 
    //   this.state.squat * .85 : 45;
    //   }

    //   else if (deadliftDay) {
    //   let todayDeadlift = (this.state.deadlift) ? 
    //   this.state.deadlift * .85 : 45;

    //   }

    // <CalculatedProgram id="bench-amount" label="Bench" value={todayBench.toFixed()} />
    //            <CalculatedProgram id="squat-amount" label="Squat" value={todaySquat.toFixed()} />
    //            <CalculatedProgram id="deadlift-amount" label="Deadlift" value={todayDeadlift.toFixed()} />
      return (
          <div>
              <Lifts />
              

              
          </div>
      );
  }
}

