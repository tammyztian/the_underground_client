import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import Dashboard from './Dashboard';
import {postLifts}  from '../actions/lifts';

export class WeightForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      success: false,
      error: null
    }
  }

    onSubmit(lifts){
      console.log(lifts);
      return this.props 
        .dispatch(postLifts(lifts))
        //.then(lifts => console.log(lifts))
        .then(this.setState({success:true}));
  }
  


  
  render(){
    if (!this.props.dispatch) return <h1>UNCONNECTED</h1>
    if (this.state.success) return <Dashboard />
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

export default reduxForm({
  form: 'weightform',
})(WeightForm);