import React from 'react';
import {connect} from 'react-redux';
import{Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';

import Input from '../Utils/input';
import {login} from '../../actions/auth';

import '../../styles/form.css';

export class LoginForm extends React.Component {

  onSubmit(values){
    this.props.dispatch(login(values.username, values.password))
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
      return <Redirect to="/lifts"/>

    

    return (
        <form 
          className="form"
          onSubmit={this.props.handleSubmit(values =>this.onSubmit(values))}>

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