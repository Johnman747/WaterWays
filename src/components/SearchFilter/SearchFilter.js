import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class SearchFilter extends Component {
    
    state = {
        locationFilters:
        {
            free: false,
            spigot: false,
            trail_access: false,
            road_access: false,
            campground_access: false,
            free_flowing: false,
            artesian_well: false,
            rv: false
        }
        // ,
        // locations:[]


    }
    
    componentDidMount(){
        this.props.dispatch({type:'ADD_TO_HISTORY', payload: this.props.history.location.pathname});
        this.props.dispatch({type:'FETCH_LOCATIONS'});
        console.log(this.props.history.location.pathname);
        // this.props.dispatch({type: 'ADD_TO_HISTORY', payload: this.props.history.location.pathname});
    }

    //  setLocations = () =>{
    //     let array = []
    //     this.props.reduxStore.locationsReducer.map(location =>
    //         {if(location.free === true && this.state.locationFilters.free === true){
    //             array.push(location) 
    //         }
    //          else if(location.spigot === true && this.state.locationFilters.spigot === true){
    //             array.push(location) 
    //         }
    //          else if(location.trail_access === true && this.state.locationFilters.trail_access === true){
    //             array.push(location) 
    //         }
    //          else if(location.road_access === true && this.state.locationFilters.road_access === true){
    //             array.push(location)
    //         }
    //          else if(location.campground_access === true && this.state.locationFilters.campground_access === true){
    //             array.push(location) 
    //         }
    //          else if(location.free_flowing === true && this.state.locationFilters.free_flowing === true){
    //             array.push(location) 
    //         }
    //          else if(location.artesian_well === true && this.state.locationFilters.artesian_well === true){
    //             array.push(location) 
    //         }
    //          else if(location.rv === true && this.state.locationFilters.rv === true){
    //             array.push(location) 
    //         }}
    //     )
    //      this.setState({
    //         ...this.state.locations,
    //         locations: array
    //     })
    //     this.setFilters();       
    // }
    
    setFilters = () =>{
        console.log(this.state.locationFilters)
        this.props.dispatch({type: 'SET_FILTERS', payload: this.state.locationFilters})
        // this.props.dispatch({type: 'SET_FILTERED_LOCATIONS', payload: this.state.locationFilters})
        // this.props.history.push('/mapHome');
    }
    

    handleToggle = (propertyName, boolean) => {
        this.setState({
            locationFilters: {
                ...this.state.locationFilters,
                [propertyName]: !boolean
            }
        })
        this.showMe();
    }
    showMe() {
        console.log('local state filters', this.state.locationFilters);
        // console.log('local state locations', this.state.locations);

    }

    

    handleClear = () => {
        console.log('Clear');
    }

    render() {
        return (
            <div>
                <p>free</p>
                {this.state.locationFilters.free ?
                    <button onClick={() => this.handleToggle("free", true)}>True</button> : <button onClick={() => this.handleToggle("free", false)}>False</button>
                }
                <p>spigot</p>
                {this.state.locationFilters.spigot ?
                    <button onClick={() => this.handleToggle("spigot", true)}>True</button> : <button onClick={() => this.handleToggle("spigot", false)}>False</button>
                }
                <p>trail_access</p>
                {this.state.locationFilters.trail_access ?
                    <button onClick={() => this.handleToggle("trail_access", true)}>True</button> : <button onClick={() => this.handleToggle("trail_access", false)}>False</button>
                }
                <p>road_access</p>
                {this.state.locationFilters.road_access ?
                    <button onClick={() => this.handleToggle("road_access", true)}>True</button> : <button onClick={() => this.handleToggle("road_access", false)}>False</button>
                }
                <p>campground_access</p>
                {this.state.locationFilters.campground_access ?
                    <button onClick={() => this.handleToggle("campground_access", true)}>True</button> : <button onClick={() => this.handleToggle("campground_access", false)}>False</button>
                }
                <p>free_flowing</p>
                {this.state.locationFilters.free_flowing ?
                    <button onClick={() => this.handleToggle("free_flowing", true)}>True</button> : <button onClick={() => this.handleToggle("free_flowing", false)}>False</button>
                }
                <p>artesian_well</p>
                {this.state.locationFilters.artesian_well ?
                    <button onClick={() => this.handleToggle("artesian_well", true)}>True</button> : <button onClick={() => this.handleToggle("artesian_well", false)}>False</button>
                }
                <p>RV</p>
                {this.state.locationFilters.RV ?
                    <button onClick={() => this.handleToggle("RV", true)}>True</button> : <button onClick={() => this.handleToggle("RV", false)}>False</button>
                }
                <br />
                {/* <button onClick={this.handleClear}>Clear</button> */}
                <button onClick={this.setFilters}>Apply</button>
                <div className="navSpacer"></div>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});

export default withRouter(connect(mapStateToProps)(SearchFilter));