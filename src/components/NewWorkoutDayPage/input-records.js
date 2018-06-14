import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

import Input from '../Utils/input';

import {postLifts}  from '../../actions/lifts';
import {viewFormFalse} from '../../actions/viewform';

export class WeightForm extends React.Component{

  
    onSubmit(lifts){
      this.props.dispatch(postLifts(lifts))
      this.props.dispatch(viewFormFalse());
  }
  

  render(){
    if (!this.props.dispatch) return <h1>UNCONNECTED</h1>
    if (this.props.authToken === null) return <Redirect to="login" />
    if (!this.props.viewForm) return <Redirect to="/dashboard" />;

    if (this.props.day === 0 )
      return <form
          className="form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
         
          <label htmlFor="lifts-squat"> Squat </label>
          <Field component={Input} type="text" name="squat" />
        
          <button 
            type="submit"
            className="button"
            disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </form>
      
    if (this.props.day === 1 ) 
      return <form
          className="form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label htmlFor="lifts-bench"> Bench </label>
          <Field component={Input} type="text" name="bench" />
        
          <button 
            type="submit"
            className="button"
            disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </form>

    if (this.props.day === 2) 
      return <form
          className="form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label htmlFor="lifts-deadlift"> Deadlift </label>
          <Field component={Input} type="text" name="deadlift" />
        
          <button 
            type="submit"
            className="button"
            disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </form>
  }
}


const mapStateToProps = state => ({
  authToken: state.auth.authToken, 
  user: state.auth.curretUser,

  viewForm: state.viewForm.viewForm,

  program: state.program.program,
  day: state.program.day,

  loading: state.lifts.loading,
  error: state.lifts.error,
  success: state.lifts.success,

  bench: state.lifts.bench,
  squat: state.lifts.squat,
  deadlift: state.lifts.deadlift,
})

WeightForm = connect(
  mapStateToProps
)(WeightForm)

export default reduxForm({
  form: 'weightform',
})(WeightForm);

