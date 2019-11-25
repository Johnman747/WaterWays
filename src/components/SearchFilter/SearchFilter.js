import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';
// Regular icons
import FreeIcon from '../Icons/FreeIcon.png';
import PaidIcon from '../Icons/PaidIcon.png';
import Spigot from '../Icons/SpigotIcon.png';
import FreeFlow from '../Icons/FreeFlowingIcon.png';
import RV from '../Icons/RvIcon.png';
import Tent from '../Icons/TentIcon.png';
import Well from '../Icons/ArtesianWellIcon.png';
import Trail from '../Icons/TrailSource.png';
import PavedRoad from '../Icons/PavedRoadIcon.png';
import DirtRoad from '../Icons/DirtRoadIcon.png';
import PavedTrail from '../Icons/PavedTrailIcon.png';
import DirtTrail from '../Icons/DirtTrailIcon.png';
// Acvtive Icons
import FreeIconBlue from '../Icons/FreeIconBlue.png';
import PaidIconBlue from '../Icons/PaidIconBlue.png';
import SpigotBlue from '../Icons/SpigotIconBLue.png';
import FreeFlowBlue from '../Icons/FreeFlowingIconBlue.png';
import RVBlue from '../Icons/RvIconBlue.png';
import TentBlue from '../Icons/TentIconBlue.png';
import WellBlue from '../Icons/ArtesianWellIconBlue.png';
import TrailBlue from '../Icons/TrailSourceBlue.png';
import PavedRoadBlue from '../Icons/PavedRoadIconBlue.png';
import DirtRoadBlue from '../Icons/DirtRoadIconBlue.png';
import PavedTrailBlue from '../Icons/PavedTrailIconBlue.png';
import DirtTrailBlue from '../Icons/DirtTrailIconBlue.png';
import "./SearchFilter.css"
// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red
    },
    typography: {
        useNextVariants: true,
    },
});

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
            rv: false,
            trail_water_source: false,
            dirt_road_access: false,
            dirt_trail_access: false
        }


    }

    componentDidMount() {
        this.props.dispatch({ type: 'ADD_TO_HISTORY', payload: this.props.history.location.pathname });
        this.props.dispatch({ type: 'FETCH_LOCATIONS' });
        console.log(this.props.history.location.pathname);
        // this.props.dispatch({type: 'ADD_TO_HISTORY', payload: this.props.history.location.pathname});
    }

    
    
    setFilters = () =>{
        console.log(this.state.locationFilters)
        this.props.dispatch({ type: 'SET_FILTERS', payload: this.state.locationFilters })
        // this.props.dispatch({type: 'SET_FILTERED_LOCATIONS', payload: this.state.locationFilters})
        // this.props.history.push('/mapHome');
    }


    handleToggle = (boolean, propertyName) => {
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
        this.props.dispatch({type:'CLEAR_FILTERS'});
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <div className="FilterPage">
                <div className='selectTitle'>
                    <h2 class='addh2'>Select Filters</h2>
                </div>
                <h5>Tap all featues that apply</h5>
                <h3>Cost</h3>
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.free ?
                        <div>
                            <img src={FreeIconBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "free")} />
                        </div>
                        :
                        <div>
                            <img src={FreeIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "free")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.free ? "ActiveDescription" : undefined}>Free</h5>
                    </div>
                </div>
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.free ?
                        <div >
                            <img src={PaidIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "free")} />
                        </div>
                        :
                        <div>
                            <img src={PaidIconBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "free")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.free ? undefined : "ActiveDescription"}>Paid</h5>
                    </div>
                </div>
                <h3>Type</h3>
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.spigot ?
                        <div >
                            <img src={SpigotBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "spigot")} />
                        </div>
                        :
                        <div >
                            <img src={Spigot} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "spigot")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.spigot ? "ActiveDescription" : undefined}>Spigot</h5>
                    </div>
                </div>
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.free_flowing ?
                        <div>
                            <img src={FreeFlowBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "free_flowing")} />
                        </div>
                        :
                        <div >
                            <img src={FreeFlow} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "free_flowing")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.free_flowing ? "ActiveDescription" : undefined}>Free Flowing</h5>
                    </div>
                </div >
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.trail_water_source ?
                        <div>
                            <img src={TrailBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "trail_water_source")} />
                        </div>
                        :
                        <div >
                            <img src={Trail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "trail_water_source")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.trail_water_source ? "ActiveDescription" : undefined}>Trail Water Source</h5>
                    </div>
                </div >
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.rv ?
                        <div>
                            <img src={RVBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "rv")} />
                        </div>
                        :
                        <div >
                            <img src={RV} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "rv")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.rv ? "ActiveDescription" : undefined}>R.V. Station</h5>
                    </div>
                </div >
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.campground_access ?
                        <div>
                            <img src={TentBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "campground_access")} />
                        </div>
                        :
                        <div >
                            <img src={Tent} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "campground_access")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.campground_access ? "ActiveDescription" : undefined}>Campground</h5>
                    </div>
                </div >
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.artesian_well ?
                        <div>
                            <img src={WellBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "artesian_well")} />
                        </div>
                        :
                        <div >
                            <img src={Well} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "artesian_well")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.artesian_well ? "ActiveDescription" : undefined}>Artesian Well</h5>
                    </div>
                </div >
                <h3>Access</h3>
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.road_access ?
                        <div>
                            <img src={PavedRoadBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "road_access")} />
                        </div>
                        :
                        <div >
                            <img src={PavedRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "road_access")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.road_access ? "ActiveDescription" : undefined}>Paved Road</h5>
                    </div>
                </div >
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.dirt_road_access ?
                        <div>
                            <img src={DirtRoadBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "dirt_road_access")} />
                        </div>
                        :
                        <div >
                            <img src={DirtRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "dirt_road_access")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.dirt_road_access ? "ActiveDescription" : undefined}>Dirt Road</h5>
                    </div>
                </div >
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.trail_access ?
                        <div>
                            <img src={PavedTrailBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "trail_access")} />
                        </div>
                        :
                        <div >
                            <img src={PavedTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "trail_access")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.trail_access ? "ActiveDescription" : undefined}>Paved Trail</h5>
                    </div>
                </div >
                <div className="AddTagWholeIcon">
                    {this.state.locationFilters.dirt_trail_access ?
                        <div>
                            <img src={DirtTrailBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(true, "dirt_trail_access")} />
                        </div>
                        :
                        <div >
                            <img src={DirtTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle(false, "dirt_trail_access")} />
                        </div>
                    }
                    <div className="AddTagDescription">
                        <h5 className={this.state.locationFilters.dirt_trail_access ? "ActiveDescription" : undefined}>Dirt Trail</h5>
                    </div>
                </div >
                <div className="btnDivFilters">
                    <Button variant="text" color="primary" onClick={this.handleClear}>Clear</Button>
                    <Button variant="contained" color="primary" onClick={this.setFilters}>Apply</Button>
                </div>
                <div className="navSpacer"></div>
            </div>
            </MuiThemeProvider>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});

export default withRouter(connect(mapStateToProps)(SearchFilter));