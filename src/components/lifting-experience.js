import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import Dashboard from '../components/Dashboard';
import { postLifts } from '../actions/lifts';

export class WeightForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      success: false,
      error: null
    }
  }

    onSubmit(values){
      const {bench, squat, deadlift} = values;
      const lifts = {bench, squat, deadlift};
      return this.props 
        .dispatch(postLifts(lifts))
        .then(lifts => console.log(lifts)
        .then(this.setState({success:true}))
    );
  }
  


  
  render(){
    if (!this.props.dispatch) return <h1>UNCONNECTED</h1>
    if (this.state.success) return <Dashboard />
    return(
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="lifts-bench"> Bench </label>
        <Field component={Input} type="text" name="lifts.bench" />
        <label htmlFor="lifts-squat"> Squat </label>
        <Field component={Input} type="text" name="lifts.squat" />
        <label htmlFor="lifts-deadlift"> Deadlift </label>
        <Field component={Input} type="text" name="lifts.deadlift" />
       
        
        <button 
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Register
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0]))
})(WeightForm);