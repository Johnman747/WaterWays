import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class AddLocationTags extends Component {
    render() {
        let addLocation = this.props.locationToAdd
        return (
            <>
                <>
                <div className='selectTitle'>
                    <h2 class='addh2'>Select Features</h2>
                </div>
                    <h5>Tap all featues that apply</h5>
                    <h3>Cost</h3>
                    {addLocation.free ?
                        <div className="Active">
                            <img src={FreeIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "free")} />
                        </div>
                        :
                        <div>
                            <img src={FreeIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "free")} />
                        </div>
                    }
                    <p>Free</p>
                    {addLocation.free ?
                        <div >
                            <img src={PaidIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "free")} />
                        </div>
                        :
                        <div className="Active">
                            <img src={PaidIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "free")} />
                        </div>
                    }
                    <p>Paid</p>
                    <br />
                    <h3>Type</h3>
                    {addLocation.spigot ?
                        <div className="Active">
                            <img src={Spigot} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "spigot")} />
                        </div>
                        :
                        <div >
                            <img src={Spigot} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "spigot")} />
                        </div>
                    }
                    <p>Spigot</p>
                    {addLocation.free_flowing ?
                        <div className="Active">
                            <img src={FreeFlow} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "free_flowing")} />
                        </div>
                        :
                        <div >
                            <img src={FreeFlow} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "free_flowing")} />
                        </div>
                    }
                    <p>Free Flowing</p>
                    {addLocation.trail_water_source?
                        <div className="Active">
                            <img src={Trail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "trail_water_source")} />
                        </div>
                        :
                        <div >
                            <img src={Trail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "trail_water_source")} />
                        </div>
                    }
                    <p>Trail Water Source</p>
                    {addLocation.RV ?
                        <div className="Active">
                            <img src={RV} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "RV")} />
                        </div>
                        :
                        <div >
                            <img src={RV} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "RV")} />
                        </div>
                    }
                    <p>R.V. Station</p>
                    {addLocation.campground_access ?
                        <div className="Active">
                            <img src={Tent} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "campground_access")} />
                        </div>
                        :
                        <div >
                            <img src={Tent} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "campground_access")} />
                        </div>
                    }
                    <p>Campground</p>
                    {addLocation.artesian_well ?
                        <div className="Active">
                            <img src={Well} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "artesian_well")} />
                        </div>
                        :
                        <div >
                            <img src={Well} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "artesian_well")} />
                        </div>
                    }
                    <p>Artesian Well</p>
                    <h3>Access</h3>
                    {addLocation.road_access ?
                        <div className="Active">
                            <img src={PavedRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "road_access")} />
                        </div>
                        :
                        <div >
                            <img src={PavedRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "road_access")} />
                        </div>
                    }
                    <p>Paved Road</p>
                    {addLocation.dirt_road_access ?
                        <div className="Active">
                            <img src={DirtRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "dirt_road_access")} />
                        </div>
                        :
                        <div >
                            <img src={DirtRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "dirt_road_access")} />
                        </div>
                    }
                    <p>Dirt Road</p>
                    {addLocation.trail_access ?
                        <div className="Active">
                            <img src={PavedTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "trail_access")} />
                        </div>
                        :
                        <div >
                            <img src={PavedTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "trail_access")} />
                        </div>
                    }
                    <p>Paved Trail</p>
                    {addLocation.dirt_trail_access ?
                        <div className="Active">
                            <img src={DirtTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "dirt_trail_access")} />
                        </div>
                        :
                        <div >
                            <img src={DirtTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "dirt_trail_access")} />
                        </div>
                    }
                    <p>Dirt Trail</p>
                </>
            </>
        )
    }
}

export default connect()(AddLocationTags);