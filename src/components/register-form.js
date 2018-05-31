import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/user';
import Input from './input';
//import { Redirect } from 'react-router-dom'

export class RegistrationForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      success: false,
      error: null
    }
  }
  componentDidMount() {
    console.log('db mounted');
  }

    onSubmit(values){
      const {username, password, firstName, lastName} = values;
      const user = {username, password, firstName, lastName};
      return this.props 
        .dispatch(registerUser(user))
        .then(user => console.log(user)
    );
  }
  


  
  render(){
    //if (this.state.success) return <Redirect to="/login" />
    return(
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="firstName"> First name</label>
        <Field component={Input} type="text" name="firstName" />
        <label htmlFor="lastName"> Last name</label>
        <Field component={Input} type="text" name="lastName" />
        <label htmlFor="username"> Username</label>
        <Field component={Input} type="text" name="username" />
        <label htmlFor="password"> Password</label>
        <Field component={Input} type="text" name="password" />
        
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
})(RegistrationForm);