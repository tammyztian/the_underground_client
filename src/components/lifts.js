import React from 'react';
import {connect} from 'react-redux';

class Lifts extends React.Component {

  render() {
    if (this.props.loading){
      return <p> Loading </p>
    }

    if (this.props.day === 0 || 3 || 6) 
      return (
        <div className="lifts-container">
              <h1>Your max today:</h1>
            <div className='lifts'>
              <ul> 
                <li> Squat {this.props.squat} </li>
              </ul>
          </div>
        </div>
      )
  

    if (this.props.day === 1 || 4 || 7)
      return (
        <div className="lifts-container">
              <h1>Your max today:</h1>
            <div className='lifts'>
              <ul> 
                <li> Bench {this.props.bench} </li>
              </ul>
          </div>
        </div>
      )
    

    if (this.props.day === 2 || 5 || 8)
      return (
      <div className="lifts-container">
            <h1>Your max today:</h1>
          <div className='lifts'>
            <ul> 
              <li> Deadlift {this.props.deadlift}</li>
            </ul>
        </div>
      </div>
    )


    // return (
    //   <div className="lifts-container">
    //         <h1>Here are your entered records</h1>
    //       <div className='lifts'>
    //         <ul> 
    //           <li> Bench {this.props.bench} </li>
    //           <li> Squat {this.props.squat} </li>
    //           <li> Deadlift {this.props.deadlift}</li>
    //         </ul>
    //     </div>
    //   </div>
    // )
  }
  }
  

const mapStateToProps = state => ({
  authToken: state.auth.authToken, 
  user: state.auth.curretUser,

  program: state.program.program,
  day: state.program.day,

  bench: state.lifts.bench,
  squat: state.lifts.squat,
  deadlift: state.lifts.deadlift,

  loading: state.lifts.loading

})

export default connect(mapStateToProps)(Lifts)