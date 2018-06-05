import React from 'react';
import {connect} from 'react-redux';

import{Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import Dashboard from './Dashboard';

import {login} from '../actions/auth';
import WeightForm from './lifting-experience';

export class LoginForm extends React.Component {

  onSubmit(values){
    return this.props
      .dispatch(login(values.username, values.password))
  }

  render() {
    let error;
    if (this.props.error){
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    if (this.props.success) 
      return <WeightForm />

      return (
        <form 
          className="login-form"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          
          {error}
          <label htmlFor="username"> Username </label>
          <Field
            component={Input}
            type="text"
            name="username"
            id="username"
          />
          <label htmlFor="password"> Password </label>
          <Field
            component={Input}
            type="password"
            name="password"
            id="password"
          />
          <button disabled={this.props.pristine || this.props.submitting}>
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