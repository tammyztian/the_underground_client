import React from 'react';
import {connect} from 'react-redux';
//import { withRouter } from 'react-router-dom';


import {getLifts} from '../actions/lifts'

class Lifts extends React.Component {
  componentWillMount() {
    this.props.dispatch(
      getLifts(this.props.match.params.lifts)
    )
  }

  render() {
  
      return (
        <div className="lifts-container">
              <h1>Here are your current lift records</h1>
            <div className='lifts'>
              {this.props.post.bench}
              {this.props.post.squat}
              {this.props.post.deadlift}
              {this.props.lifts.createdAt}
          </div>
        </div>
      )
    }
  
}

const mapStateToProps = state => ({
  lift: state.lifts,
  
})

export default connect(mapStateToProps)(Lifts)