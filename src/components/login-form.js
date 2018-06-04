import React from 'react';
import{Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import Dashboard from './Dashboard';

import {login} from '../actions/auth';
import WeightForm from './lifting-experience';

export class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      success: false,
      error: null
    }
  }

  

  onSubmit(values){
    return this.props
      .dispatch(login(values.username, values.password))
      .then(this.setState({success: true}));
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

    if (this.state.success) 
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

export default reduxForm({
  form: 'loginForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))


})(LoginForm)