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
import './AddTags.css'

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
                    <div className="AddTagWholeIcon">
                        {addLocation.free ?
                            <div>
                                <img src={FreeIconBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "free")} />
                            </div>
                            :
                            <div>
                                <img src={FreeIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "free")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.free ? "ActiveDescription" : undefined}>Free</h5>
                        </div>
                    </div>
                    <div className="AddTagWholeIcon">
                        {addLocation.free ?
                            <div >
                                <img src={PaidIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "free")} />
                            </div>
                            :
                            <div>
                                <img src={PaidIconBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "free")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.free ? undefined : "ActiveDescription"}>Paid</h5>
                        </div>
                    </div>
                    <h3>Type</h3>
                    <div className="AddTagWholeIcon">
                        {addLocation.spigot ?
                            <div >
                                <img src={SpigotBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "spigot")} />
                            </div>
                            :
                            <div >
                                <img src={Spigot} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "spigot")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.spigot ? "ActiveDescription" : undefined}>Spigot</h5>
                        </div>
                    </div>
                    <div className="AddTagWholeIcon">
                        {addLocation.free_flowing ?
                            <div>
                                <img src={FreeFlowBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "free_flowing")} />
                            </div>
                            :
                            <div >
                                <img src={FreeFlow} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "free_flowing")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.free_flowing ? "ActiveDescription" : undefined}>Free Flowing</h5>
                        </div>
                    </div >
                    <div className="AddTagWholeIcon">
                        {addLocation.trail_water_source ?
                            <div>
                                <img src={TrailBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "trail_water_source")} />
                            </div>
                            :
                            <div >
                                <img src={Trail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "trail_water_source")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.trail_water_source ? "ActiveDescription" : undefined}>Trail Water Source</h5>
                        </div>
                    </div >
                    <div className="AddTagWholeIcon">
                        {addLocation.rv ?
                            <div>
                                <img src={RVBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "rv")} />
                            </div>
                            :
                            <div >
                                <img src={RV} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "rv")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.rv ? "ActiveDescription" : undefined}>R.V. Station</h5>
                        </div>
                    </div >
                    <div className="AddTagWholeIcon">
                        {addLocation.campground_access ?
                            <div>
                                <img src={TentBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "campground_access")} />
                            </div>
                            :
                            <div >
                                <img src={Tent} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "campground_access")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.campground_access ? "ActiveDescription" : undefined}>Campground</h5>
                        </div>
                    </div >
                    <div className="AddTagWholeIcon">
                        {addLocation.artesian_well ?
                            <div>
                                <img src={WellBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "artesian_well")} />
                            </div>
                            :
                            <div >
                                <img src={Well} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "artesian_well")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.artesian_well ? "ActiveDescription" : undefined}>Artesian Well</h5>
                        </div>
                    </div >
                    <h3>Access</h3>
                    <div className="AddTagWholeIcon">
                        {addLocation.road_access ?
                            <div>
                                <img src={PavedRoadBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "road_access")} />
                            </div>
                            :
                            <div >
                                <img src={PavedRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "road_access")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.road_access ? "ActiveDescription" : undefined}>Paved Road</h5>
                        </div>
                    </div >
                    <div className="AddTagWholeIcon">
                        {addLocation.dirt_road_access ?
                            <div>
                                <img src={DirtRoadBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "dirt_road_access")} />
                            </div>
                            :
                            <div >
                                <img src={DirtRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "dirt_road_access")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.dirt_road_access ? "ActiveDescription" : undefined}>Dirt Road</h5>
                        </div>
                    </div >
                    <div className="AddTagWholeIcon">
                        {addLocation.trail_access ?
                            <div>
                                <img src={PavedTrailBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "trail_access")} />
                            </div>
                            :
                            <div >
                                <img src={PavedTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "trail_access")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.trail_access ? "ActiveDescription" : undefined}>Paved Trail</h5>
                        </div>
                    </div >
                    <div className="AddTagWholeIcon">
                        {addLocation.dirt_trail_access ?
                            <div>
                                <img src={DirtTrailBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(true, "dirt_trail_access")} />
                            </div>
                            :
                            <div >
                                <img src={DirtTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.props.handleChange(false, "dirt_trail_access")} />
                            </div>
                        }
                        <div className="AddTagDescription">
                            <h5 className={addLocation.dirt_trail_access ? "ActiveDescription" : undefined}>Dirt Trail</h5>
                        </div>
                    </div >
                </>
            </>
        )
    }
}

export default connect()(AddLocationTags);