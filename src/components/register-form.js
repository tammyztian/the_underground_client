import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {registerUser} from '../actions/user';
import Input from './input';
import LoginForm from './login-form';

export class RegistrationForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      success: false,
      error: null
    }
  }


    onSubmit(values){
      const {username, password, firstName, lastName} = values;
      const user = {username, password, firstName, lastName};
      return this.props 
        .dispatch(registerUser(user))
        .then(user => console.log(user))
        .then(this.setState({success: true}));
  }
  


  
  render(){
    if (this.state.success) {
      return <LoginForm />
    } else {
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
          <Field component={Input} type="password" name="password" />
          
          <button 
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Register
          </button>
        </form>
      )}
  }
}

export default reduxForm({
  form: 'registration',

})(RegistrationForm);