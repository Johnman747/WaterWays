import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class SearchFilter extends Component {

    state = {
        locationFilters:
        {
            free: null,
            spigot: null,
            trail_access: null,
            road_access: null,
            campground_access: null,
            free_flowing: null,
            artesian_well: null,
            rv: null
        },
        locations:[]
    }
    
    componentDidMount(){
        this.props.dispatch({type:'FETCH_LOCATIONS'});
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
        this.showMe();        
    }

    // componentDidUpdate(preProps){
    //     if(this.props.reduxStore.locationsReducer !== preProps.reduxStore.locationsReducer){

    //     this.props.reduxStore.locationsReducer.forEach(location => {
    //         this.setState({
    //             locations: [...this.state.locations, location]
    //         });
    //     })
    //     console.log('Component did update hook');
    //     this.showMe();
    //     }
    // }

    handleToggle = (propertyName, boolean) => {
        this.setState({
            locationFilters: {
                // ...this.state.location,
                [propertyName]: !boolean
            }
        })
        this.showMe();
    }
    showMe() {
        // console.log('redux store reducer', this.props.reduxStore.locationsReducer)
        console.log('local state', this.state);
    }

    handleApply = () => {
        console.log('Submit!');
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
                <br />
                <button onClick={this.handleClear}>Clear</button>
                <button onClick={this.setLocations}>Apply</button>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(SearchFilter);