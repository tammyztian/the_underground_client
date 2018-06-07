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
    if (!this.props.authToken) return <Redirect to="/" />;
    if (this.props.success) return <Redirect to="/dashboard" />;

    if (this.props.day === 0 || 3 || 6){
      return(
        <form
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
      )}
      
    if (this.props.day === 1 || 4 || 7) {
      return(
        <form
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
      )}

    if (this.props.day === 2 || 5 || 8) {
      return(
        <form
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
      )}


    // return(
    //   <form
    //     className="form"
    //     onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
    //   >
    //     <label htmlFor="lifts-bench"> Bench </label>
    //     <Field component={Input} type="text" name="bench" />
    //     <label htmlFor="lifts-squat"> Squat </label>
    //     <Field component={Input} type="text" name="squat" />
    //     <label htmlFor="lifts-deadlift"> Deadlift </label>
    //     <Field component={Input} type="text" name="deadlift" />
       
        
    //     <button 
    //       type="submit"
    //       className="button"
    //       disabled={this.props.pristine || this.props.submitting}>
    //       Submit
    //     </button>
    //   </form>
    // )
  }
}


const mapStateToProps = state => ({
  authToken: state.auth.authToken, 
  user: state.auth.curretUser,

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

