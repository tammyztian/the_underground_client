import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';

import {registerUser} from '../../actions/user';
import {createProgramRecord} from '../../actions/program';
import {viewFormFalse} from '../../actions/viewform';
import { login } from '../../actions/auth';

import Input from '../Utils/input';
import '../../styles/form.css';


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
  
      return this.props.dispatch(registerUser(user))
      .then(console.log(user))
      .then(() => {
        return this.props.dispatch(login(values.username, values.password))
      })
      .then(() => {
        this.props.dispatch(createProgramRecord())
      })
      .then(this.setState({success: true}))
  }
  
//automatically log in after registering

  
  render(){
    if (this.state.success) {
      return <Redirect to="/lifts"/>

    } else {
      return(
        <form
          className="form"
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
            className="button"
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