import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../Icons/waterwaysLogo.png'
import { InputAdornment } from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showLogin: false,
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

  loginRender = () => {
    this.setState({
      showLogin: !this.state.showLogin,
    });
    console.log('Click', this.state.showLogin);
  }

  render() {
    const { showLogin } = this.state;

    return (
      <div className="loginPage">
        <MuiThemeProvider theme={theme}>
        {showLogin === false ?
          <div className="renderLogin">
            <img src={Logo} alt="waterwaysLogo" height="250" width="250" className="waterwaysLogo" />
            <br />
            <div className="logoFont">
              <h1>WaterWays</h1>
              <br />
              <div className="loginSpace">
                <p>Sharing Knowledge.</p>
                <p>Preserving Resources.</p>
              </div>
            </div>
            <Button size='large' variant="contained" color="primary" onClick={this.loginRender}>Login</Button>
            <br />
            <br />
            <button
              type="button"
              className="link-button"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
            >
              New? Create an Account
          </button>
          </div>
          :
          showLogin === true ?
            <>
              <img src={Logo} alt="waterwaysLogo" height="250" width="250" className="waterwaysLogo" />
              <div className="logoFont">
                <h1>WaterWays</h1>
                <div>
                  <p>Sharing Knowledge.</p>
                  <p>Preserving Resources.</p>
                  {this.props.errors.loginMessage && (
                    <p
                      className="alert"
                      role="alert"
                    >
                      {this.props.errors.loginMessage}
                    </p>
                  )}
                </div>

              </div>
              <form className='loginForm' onSubmit={this.login}>
                <div>
                  <TextField
                    id="filled-username-input"
                    label="User Name"
                    type="text"
                    name="username"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ startAdornment: <InputAdornment position="start"><Person /></InputAdornment> }}
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                  <br />
                  <TextField
                    id="filled-username-input"
                    label="Password"
                    type="password"
                    name="password"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ startAdornment: <InputAdornment position="start"><Lock /></InputAdornment> }}
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                </div>
                <br />
                <div>
                  <Button size='large' variant="contained" color="primary" onClick={this.login}>Login</Button>

                  <br />
                  <br />
                  <button
                    type="button"
                    className="link-button"
                    onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
                  >
                    New? Create an Account
          </button>
                </div>
              </form>
            </>
            : ""}
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

export default connect(mapStateToProps)(LoginPage);
