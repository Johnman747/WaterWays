import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import searchIcon from '../Icons/Search.png'
import Addicon from '../Icons/AddIcon.png'
import PersonIcon from '../Icons/PersonIcon.png'
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <div className="nav-right">
      <Link className="nav-link" to="/maphome">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {/* <img className="navbarIcon" src={searchIconBlue}/> */}
        <img className="navbarIcon1" src={searchIcon} alt="search"/>
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
          <Link className="nav-link" to="/add">
            <img className="navbarIcon2" src={Addicon} alt="add water source"/>
          </Link>
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/user">
        <img className="navbarIcon3" src={PersonIcon} alt="account"/>
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
