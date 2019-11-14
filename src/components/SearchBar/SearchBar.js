import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

class SearchBar extends Component {
    state = {
        search: '',
        locations:[]
    }

    componentDidMount(){
        this.getLocations();
    }

    getLocations = () =>{
        this.props.dispatch({ type: 'FETCH_SEARCH_LOCATIONS' });
    }

    setLocations = ()=>{
        let array = []
        this.props.reduxStore.locationsReducer.map(location =>
            array.push(location) 
        )
        this.setState({
            ...this.state,
            locations: array
        })        
    }

    searchBar = (e) =>{
        this.setState({
            ...this.state,
            search: e.target.value
        })
    }

    handleClick = (id)=>{
        this.props.history.push(`/location/${id}`)
    }

    render() {
        let filteredLocation = this.state.locations.filter(
            (location) => {
                return location.name.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        );

        

        return (
            <>
                <input placeholder="Search Bar" onClick={this.setLocations} onChange={(e)=>this.searchBar(e)} />
                {filteredLocation.map(location =>{
                    return(
                        <p key={location.id} onClick={()=>this.handleClick(location.id)}>{location.name}</p>
                    )
                })}
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(SearchBar);