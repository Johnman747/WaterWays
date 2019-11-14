import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    first: '',
    last: '',
    admin: 3
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          first: this.state.first,
          last: this.state.last,
          admin: 3
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form className='registerForm' onSubmit={this.registerUser}>
          <div>
              <TextField
                label="First Name"
                type="text"
                margin="normal"
                variant="outlined"
                value={this.state.first}
                onChange={this.handleInputChangeFor('first')}
              /><br/>
              <TextField
                label="Last Name"
                type="text"
                margin="normal"
                variant="outlined"
                value={this.state.last}
                onChange={this.handleInputChangeFor('last')}
              /><br/>
              <TextField
                label="User Name"
                type="text"
                margin="normal"
                variant="outlined"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              /><br/>
              <TextField
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              /><br/>
          </div><br/>
          <br></br>
          <Button size='large' variant="contained" color="primary" onClick={this.registerUser}>
              Register
          </Button>
        </form>
        <br></br>
        
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

