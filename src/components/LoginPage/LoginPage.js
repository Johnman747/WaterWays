import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form className='loginForm' onSubmit={this.login}>
          <div>
              <TextField
                id="filled-username-input"
                label="User Name"
                type="text"
                name="username"
                margin="normal"
                variant="outlined"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
          </div><br/>
          <div>
              <TextField
                id="filled-username-input"
                label="Password"
                type="password"
                name="password"
                margin="normal"
                variant="outlined"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              /> 
          </div>
          <div><br/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

            <Button size='large' variant="contained" color="primary" onClick={this.login}>
              Login
            </Button>
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
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

export default connect(mapStateToProps)(LoginPage);
