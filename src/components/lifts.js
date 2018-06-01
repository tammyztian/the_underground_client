import React from 'react';
import {connect} from 'react-redux';

class Lifts extends React.Component {
  submit = values => {
    console.log(values);
  }


  render() {
  
      return (
        <div className="lifts-container">
              <h1>Here are your entered records</h1>
            <div className='lifts'>
              <ul> 
                <li> {this.props.bench} </li>
                <li>{this.props.squat} </li>
                <li> {this.props.deadlift}</li>
              </ul>
          </div>
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

export default connect(mapStateToProps)(Lifts)