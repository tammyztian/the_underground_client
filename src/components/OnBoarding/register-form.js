import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Redirect} from 'react-router-dom';

import {registerUser} from '../../actions/user';
import {createProgramRecord} from '../../actions/program';
import { login } from '../../actions/auth';

import '../../styles/form.css';

import Input from '../Utils/input';
import {required, nonEmpty, length, isTrimmed} from '../Utils/validators';
const passwordLength = length({min: 5, max: 72});



export class RegistrationForm extends React.Component{
  
  onSubmit(values){
      const {username, password, firstName, lastName} = values;
      const user = {username, password, firstName, lastName};
  
      return this.props.dispatch(registerUser(user))
      .then(() => {
        return this.props.dispatch(login(values.username, values.password))
      })
      .then(() => {
        return  this.props.dispatch(createProgramRecord())
      })
    }


  
  render(){

  

    if (this.props.submitSucceeded) {
      return <Redirect to="/lifts"/>


    } else {
      return(
        <form
          className="form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >

          <label htmlFor="firstName"> First name</label>
          <Field 
            component={Input} 
            type="text" 
            name="firstName" />
          <label htmlFor="lastName"> Last name</label>
          <Field 
            component={Input} 
            type="text" 
            name="lastName" />
          <label htmlFor="username"> Username</label>
          <Field 
            component={Input} 
            type="text" 
            name="username"
            validate={[required, nonEmpty, isTrimmed]}            />
          <label htmlFor="password"> Password</label>
          <Field 
            component={Input} 
            type="password" 
            name="password" 
            validate={[required, passwordLength, isTrimmed]}

            />
          
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
  onSubmitFail: (errors, dispatch) =>
  dispatch(focus('contact', Object.keys(errors)[0]))

})(RegistrationForm);