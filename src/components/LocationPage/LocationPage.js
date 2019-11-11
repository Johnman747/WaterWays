import React, {Component} from 'react';
import {connect} from 'react-redux';

class LocationPage extends Component{
    state = {
        singleLocation:{

        }
    }

    componentDidMount(){
        this.getInfo()
    }

    getInfo = () =>{
        this.props.dispatch({type: 'FETCH_SINGLELOCATION', payload: this.props.match.params.id})
    }

    render(){
        return (
            <>
            <h1>LocationPage #{this.props.match.params.id}</h1>
            </>
        )
    }
}

const mapStateToProps = state => ({
    
  });
export default connect(LocationPage);