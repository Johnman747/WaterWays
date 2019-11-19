import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../Icons/waterwaysLogo.png'
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import swal from 'sweetalert';


const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});


class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    first: '',
    last: '',
    admin: 1
  };

  registerUser = (event) => {
    event.preventDefault();
 
    if (this.state.username && this.state.password) {
      swal({
        title: "Is your information correct?",
        text: "You will not be able to change this later",
        buttons: true,
      }).then((willRegister)=> {
        if(willRegister){
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          first: this.state.first,
          last: this.state.last,
          admin: 3
        },
      })
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
        }
      })
    }
  }
   // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="registerPage">
        <MuiThemeProvider theme={theme}>
          <br />
          <img src={Logo} alt="waterwaysLogo" height="100" width="100" className="waterwaysLogo" />
          <div className="logoFont">
            <h1>WaterWays</h1>
            <p>Sharing Knowledge.</p>
            <p>Preserving Resources.</p>
          </div>

          <form className='registerForm' onSubmit={this.registerUser}>
            <div>
              <TextField
                id="filled-username-input"
                label="First Name"
                type="text"
                margin="normal"
                variant="outlined"
                value={this.state.first}
                onChange={this.handleInputChangeFor('first')}
              /><br />
              <TextField
                id="filled-username-input"
                label="Last Name"
                type="text"
                margin="normal"
                variant="outlined"
                value={this.state.last}
                onChange={this.handleInputChangeFor('last')}
              /><br />
              <TextField
                id="filled-username-input"
                label="User Name"
                type="text"
                margin="normal"
                variant="outlined"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              /><br />
              <TextField
                id="filled-username-input"
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              /><br />
              {this.props.errors.registrationMessage && (
                <p
                  className="alert"
                  role="alert"
                >
                  {this.props.errors.registrationMessage}
                </p>
              )}
            </div><br />
            <Button size='large' variant="contained" color="primary" onClick={this.registerUser}>
              Register
          </Button>
          </form>
          <br />
          <center>
            <button
              type="button"
              className="register-link-button"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
            >
              Login
          </button>
          </center>
        </MuiThemeProvider>
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

