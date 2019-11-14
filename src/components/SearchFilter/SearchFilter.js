import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class SearchFilter extends Component {

    state = {
        location:
        {
            free: null,
            spigot: null,
            trail_access: null,
            road_access: null,
            campground_access: null,
            free_flowing: null,
            artesian_well: null,
            rv: null
        }
    }

    handleToggle = (propertyName, boolean) => {
        this.setState({
            location: {
                // ...this.state.location,
                [propertyName]: !boolean
            }
        })
        this.showMe();
    }
    showMe() {
        console.log(this.state.location);
    }

    handleSubmit = () => {
        console.log('Submit!');
    }

    handleClear = () => {
        console.log('Clear');
    }

    render() {
        return (
            <div>
                <p>free</p>
                {this.state.location.free ?
                    <button onClick={() => this.handleToggle("free", true)}>True</button> : <button onClick={() => this.handleToggle("free", false)}>False</button>
                }
                <p>spigot</p>
                {this.state.location.spigot ?
                    <button onClick={() => this.handleToggle("spigot", true)}>True</button> : <button onClick={() => this.handleToggle("spigot", false)}>False</button>
                }
                <p>trail_access</p>
                {this.state.location.trail_access ?
                    <button onClick={() => this.handleToggle("trail_access", true)}>True</button> : <button onClick={() => this.handleToggle("trail_access", false)}>False</button>
                }
                <p>road_access</p>
                {this.state.location.road_access ?
                    <button onClick={() => this.handleToggle("road_access", true)}>True</button> : <button onClick={() => this.handleToggle("road_access", false)}>False</button>
                }
                <p>campground_access</p>
                {this.state.location.campground_access ?
                    <button onClick={() => this.handleToggle("campground_access", true)}>True</button> : <button onClick={() => this.handleToggle("campground_access", false)}>False</button>
                }
                <p>free_flowing</p>
                {this.state.location.free_flowing ?
                    <button onClick={() => this.handleToggle("free_flowing", true)}>True</button> : <button onClick={() => this.handleToggle("free_flowing", false)}>False</button>
                }
                <p>artesian_well</p>
                {this.state.location.artesian_well ?
                    <button onClick={() => this.handleToggle("artesian_well", true)}>True</button> : <button onClick={() => this.handleToggle("artesian_well", false)}>False</button>
                }
                <p>RV</p>
                {this.state.location.RV ?
                    <button onClick={() => this.handleToggle("RV", true)}>True</button> : <button onClick={() => this.handleToggle("RV", false)}>False</button>
                }
                <br />
                <br />
                <button onClick={this.handleClear}>Clear</button>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(SearchFilter);