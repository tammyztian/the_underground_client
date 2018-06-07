import React from 'react';
import {connect} from 'react-redux';

import{Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import Dashboard from './Dashboard';

import {login} from '../actions/auth';
import WeightForm from './lifting-experience';

import '../styles/form.css';

export class LoginForm extends React.Component {

  onSubmit(values){
    return this.props
      .dispatch(login(values.username, values.password))
  }


  render() {
    let error;
    if (!this.props.error === null){
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error.message}
        </div>
      );
    }

    if (this.props.success) 
      return <WeightForm />

    return (
        <form 
          className="form"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>

          {error}
          <label htmlFor="username" className="form-input"> Username </label>
          <Field
            component={Input}
            type="text"
            name="username"
            id="input"
          />
          <label htmlFor="password" className="form-input"> Password </label>
          <Field
            component={Input}
            type="password"
            name="password"
            id="input"
            
          />
          <button className="button" disabled={this.props.pristine || this.props.submitting}>
            Log in
          </button>
        </form>
      );
  }
}



const mapStateToProps = state => ({
  authToken: state.auth.authToken, 
  user: state.auth.curretUser,
  loading: state.auth.loading,
  error: state.auth.error,
  success: state.auth.success
})

LoginForm = connect(
  mapStateToProps
)(LoginForm)

export default reduxForm({
  form: 'loginForm',


})(LoginForm)