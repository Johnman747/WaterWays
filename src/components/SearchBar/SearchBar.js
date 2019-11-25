import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import BackIcon from '../Icons/backArrowWhite.png'
import FilterIcon from '../Icons/FilterIcon.png'
import './SearchBar.css'

class SearchBar extends Component {
    state = {
        search: '',
        locations: [],
        backIcon: false
    }

    componentDidMount() {
        this.getLocations();
    }

    getLocations = () => {
        this.props.dispatch({ type: 'FETCH_SEARCH_LOCATIONS' });
    }

    setLocations = () => {
        let array = []
        this.props.reduxStore.locationsReducer.map(location =>
            array.push(location)
        )
        this.setState({
            ...this.state,
            locations: array,
            backIcon: true
        })
    }

    searchBar = (e) => {
        this.setState({
            ...this.state,
            search: e.target.value
        })
    }

    handleClick = (id) => {
        this.props.history.push(`/location/${id}`)
    }
    backButton = () => {
        this.setState({
            ...this.state,
            locations: [],
            backIcon: false
        });
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
            <div className="SearchBar" >
                {this.state.backIcon && <img className="SearchBackBtn" src={BackIcon} alt="Back Button" onClick={this.backButton} />}
                <input className="Search" placeholder="Search Bar" onClick={this.setLocations} onChange={(e) => this.searchBar(e)} />
                <img src={FilterIcon} className="filter" alt="Filter Icon" onClick={() => this.props.history.push('/searchFilter')}/>
            </div>
                <div className="Results">
                    {filteredLocation.map(location => {
                        return (
                            <div className="SearchLocationShow" key={location.id} onClick={() => this.handleClick(location.id)}>
                                <div className="ImgDivSearch">
                                    <img className="SearchImg" src={location.photo_primary} alt="Location" />
                                </div>
                                <div className="displayInfoSearch">
                                    <h3 className="SearchLocationName" >{location.name}</h3>
                                    <h5 className="SearchLocationName">{location.address}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default withRouter(connect(mapStateToProps)(SearchBar));