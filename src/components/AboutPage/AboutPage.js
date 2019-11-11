import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AboutPage extends Component{
  componentDidMount(){
    this.props.dispatch({type:'FETCH_LOCATIONS'});
  }
  render(){
    return(
      <p>{JSON.stringify(this.props.reduxStore.locationsReducer)}</p>
    )
  }
}
const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(AboutPage);

