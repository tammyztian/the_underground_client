import React from 'react';
import {connect} from 'react-redux';

class Lifts extends React.Component {
  submit = values => {
    console.log(values);
  }


  render() {
    if (this.props.loading){
      return <p> Loading </p>
    }
      return (
        <div className="lifts-container">
              <h1>Here are your entered records</h1>
            <div className='lifts'>
              <ul> 
                <li> Bench {this.props.bench} </li>
                <li> Squat {this.props.squat} </li>
                <li> Deadlift {this.props.deadlift}</li>
              </ul>
          </div>
        </div>
      )
    }
  }
  

const mapStateToProps = state => ({
  authToken: state.auth.authToken, 
  user: state.auth.curretUser,
  bench: state.lifts.bench,
  squat: state.lifts.squat,
  deadlift: state.lifts.deadlift,
  loading: state.lifts.loading

})

export default connect(mapStateToProps)(Lifts)