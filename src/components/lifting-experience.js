import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import Dashboard from './Dashboard';
import {postLifts}  from '../actions/lifts';
import { LoginForm } from './login-form';


export class WeightForm extends React.Component{
  
    onSubmit(lifts){
      console.log(lifts);
      return this.props 
        .dispatch(postLifts(lifts))
     
  }
  

  render(){
    if (!this.props.dispatch) return <h1>UNCONNECTED</h1>

    if (!this.props.auth) return <Redirect to="/" />;

    if (this.props.success) return <Redirect to="/dashboard" />;
    return(
      <form
        className="lifts-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="lifts-bench"> Bench </label>
        <Field component={Input} type="text" name="bench" />
        <label htmlFor="lifts-squat"> Squat </label>
        <Field component={Input} type="text" name="squat" />
        <label htmlFor="lifts-deadlift"> Deadlift </label>
        <Field component={Input} type="text" name="deadlift" />
       
        
        <button 
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </form>
    )
  }
}


const mapStateToProps = state => ({
  authToken: state.auth.authToken, 
  user: state.auth.curretUser,
  loading: state.lifts.loading,
  error: state.lifts.error,
  success: state.lifts.success,
  bench: state.lifts.bench,
  squat: state.lifts.squat,
  deadlift: state.lifts.deadlift,
  loading: state.lifts.loading
})

WeightForm = connect(
  mapStateToProps
)(WeightForm)

export default reduxForm({
  form: 'weightform',
})(WeightForm);

