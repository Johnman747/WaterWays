import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
// ---- LOOK AT ALL THESE ICONS ---- //
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
// --- Material UI --- //
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red
    },
    typography: {
        useNextVariants: true,
    },
});

class ModerateSingleLocation extends Component {

    state = {
        location: {
            id: '',
            name: '',
            description: '',
            address: '',
            latitude: '',
            longitude: '',
            free: '',
            created_by: '',
            spigot: '',
            free_flowing: '',
            trail_water_source: '',
            rv: '',
            campground_access: '',
            artesian_well: '',
            road_access: '',
            dirt_road_access: '',
            trail_access: '',
            dirt_trail_access: '',
            photo_primary: '',
            approve: ''
        }
    }

    // Fetches single location by ID.
    componentDidMount() {
        console.log(this.props.match.params);
        this.props.dispatch({ type: 'FETCH_SINGLE_LOCATION', payload: this.props.match.params.id })
    } // end componentDidMount

    componentDidUpdate(prevProps) {

        if (this.props.reduxStore.SingleLocationReducer !== prevProps.reduxStore.SingleLocationReducer) {
            // let array = [];
            console.log(this.props.reduxStore.SingleLocationReducer.photo_primary)
            this.props.reduxStore.SingleLocationReducer.map(location => {
                this.setState({
                    location: {
                        id: location.id,
                        name: location.name,
                        description: location.description,
                        address: location.address,
                        latitude: location.latitude,
                        longitude: location.longitude,
                        free: location.free,
                        created_by: location.created_by,
                        spigot: location.spigot,
                        free_flowing: location.free_flowing,
                        trail_water_source: location.trail_water_source,
                        rv: location.rv,
                        campground_access: location.campground_access,
                        artesian_well: location.artesian_well,
                        road_access: location.road_access,
                        dirt_road_access: location.dirt_road_access,
                        trail_access: location.trail_access,
                        dirt_trail_access: location.dirt_trail_access,
                        photo_primary: location.photo_primary,
                        approve: location.approve
                    }
                });
            })
        }
    }

    handleChange = (event, propertyName) => {
        this.setState({
            location: {
                [propertyName]: event.target.value,
                [propertyName]: !event.target.value,
            }
        })
    }

    handleToggle = (propertyName, boolean) => {
        this.setState({
            location: {
                ...this.state.location,
                [propertyName]: !boolean
            }
        })
    }

    handleBack = () => {
        this.props.history.push("/ModerateLocation")
    }

    handleSubmit = () => {
        this.props.dispatch({ type: 'UPDATE_LOCATION', payload: this.state.location });
        this.props.history.push('/');
    }

    handleDelete = () => {
        this.props.dispatch({ type: 'DELETE_LOCATION', payload: this.state.location.id });
        this.props.history.push('/');
    }

    onchange = (event) =>{
        let image = event.target.files;
        let reader = new FileReader();
    
        reader.readAsDataURL(image[0]);
        reader.onload = (event) =>{
          const formData = event.target.result
          this.setImage(formData);
        }
      }

      setImage = (formData) =>{
          this.setState({
              location:{
                  ...this.state.location,
                  photo_primary: formData
              }
          })
      }
      handle_AddImage = () =>{
        
    }

    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>

                    <div className="moderateSingleLocation">
                        <div className="moderateSingleLocationHeader">
                            <h1><ArrowBackIosIcon onClick={this.handleBack} className="moderateUserArrow" fontSize="medium" /><span>Location Details:</span></h1>
                        </div>

                        <TextField
                            label="Location Name"
                            type="text"
                            name="name"
                            margin="normal"
                            variant="outlined"
                            value={this.state.location.name}
                            onChange={(event) => this.handleChange(event, 'name')}
                        />
                        <br />
                        <TextField
                            label="Description"
                            type="text"
                            name="description"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows="5"
                            value={this.state.location.description}
                            onChange={(event) => this.handleChange(event, 'description')} />
                        <br />
                        <TextField
                            label="Address"
                            type="text"
                            name="address"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            value={this.state.location.address}
                            onChange={(event) => this.handleChange(event, 'address')} />
                        <br />
                        {/* <input value={this.state.location.created_by} onChange={(event) => this.handleChange(event, 'created_by')} /> */}
                        <br />
                        <TextField
                            label="Latitude"
                            type="text"
                            name="latitude"
                            margin="normal"
                            variant="outlined"
                            value={this.state.location.latitude}
                            onChange={(event) => this.handleChange(event, 'latitude')} />
                        <TextField
                            label="Longitude"
                            type="text"
                            name="longitude"
                            margin="normal"
                            variant="outlined"
                            value={this.state.location.longitude}
                            onChange={(event) => this.handleChange(event, 'longitude')} />
                        <br />

                        <h5>Tap all featues that apply</h5>
                        <h3>Cost</h3>
                        <div className="AddTagWholeIcon">
                            {this.state.location.free ?
                                <div>
                                    <img src={FreeIconBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("free", false)} />
                                </div>
                                :
                                <div>
                                    <img src={FreeIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("free", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.free ? "ActiveDescription" : undefined}>Free</h5>
                            </div>
                        </div>
                        <div className="AddTagWholeIcon">
                            {this.state.location.free ?
                                <div >
                                    <img src={PaidIcon} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("free", true)} />
                                </div>
                                :
                                <div>
                                    <img src={PaidIconBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("free", true)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.free ? undefined : "ActiveDescription"}>Paid</h5>
                            </div>
                        </div>

                        {/* <p>free</p>
                    {this.state.location.free ?
                        <button onClick={() => this.handleToggle("free", true)}>True</button> : <button onClick={() => this.handleToggle("free", false)}>False</button>
                    } */}

                        <h3>Type</h3>
                        <div className="AddTagWholeIcon">
                            {this.state.location.spigot ?
                                <div >
                                    <img src={SpigotBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("spigot", true)} />
                                </div>
                                :
                                <div >
                                    <img src={Spigot} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("spigot", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.spigot ? "ActiveDescription" : undefined}>Spigot</h5>
                            </div>
                        </div>

                        {/* <p>spigot</p>
                    {this.state.location.spigot ?
                        <button onClick={() => this.handleToggle("spigot", true)}>True</button> : <button onClick={() => this.handleToggle("spigot", false)}>False</button>
                    } */}

                        <div className="AddTagWholeIcon">
                            {this.state.location.free_flowing ?
                                <div>
                                    <img src={FreeFlowBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("free_flowing", true)} />
                                </div>
                                :
                                <div >
                                    <img src={FreeFlow} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("free_flowing", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.free_flowing ? "ActiveDescription" : undefined}>Free Flowing</h5>
                            </div>
                        </div >

                        {/* <p>free_flowing</p>
                    {this.state.location.free_flowing ?
                        <button onClick={() => this.handleToggle("free_flowing", true)}>True</button> : <button onClick={() => this.handleToggle("free_flowing", false)}>False</button>
                    } */}

                        <div className="AddTagWholeIcon">
                            {this.state.location.trail_water_source ?
                                <div>
                                    <img src={TrailBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("trail_water_source", true)} />
                                </div>
                                :
                                <div >
                                    <img src={Trail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("trail_water_source", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.trail_water_source ? "ActiveDescription" : undefined}>Trail Water Source</h5>
                            </div>
                        </div >

                        {/* <p>THERE CURRENTLY IS NO PUT FOR TRAIL WATER SOURCE</p> */}

                        <div className="AddTagWholeIcon">
                            {this.state.location.rv ?
                                <div>
                                    <img src={RVBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("rv", true)} />
                                </div>
                                :
                                <div >
                                    <img src={RV} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("rv", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.rv ? "ActiveDescription" : undefined}>R.V. Station</h5>
                            </div>
                        </div >

                        {/* <p>RV</p>
                    {this.state.location.RV ?
                        <button onClick={() => this.handleToggle("RV", true)}>True</button> : <button onClick={() => this.handleToggle("RV", false)}>False</button>
                    } */}

                        <div className="AddTagWholeIcon">
                            {this.state.location.campground_access ?
                                <div>
                                    <img src={TentBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("campground_access", true)} />
                                </div>
                                :
                                <div >
                                    <img src={Tent} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("campground_access", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.campground_access ? "ActiveDescription" : undefined}>Campground</h5>
                            </div>
                        </div >

                        {/* <p>campground_access</p>
                    {this.state.location.campground_access ?
                        <button onClick={() => this.handleToggle("campground_access", true)}>True</button> : <button onClick={() => this.handleToggle("campground_access", false)}>False</button>
                    } */}

                        <div className="AddTagWholeIcon">
                            {this.state.location.artesian_well ?
                                <div>
                                    <img src={WellBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("artesian_well", true)} />
                                </div>
                                :
                                <div >
                                    <img src={Well} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("artesian_well", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.artesian_well ? "ActiveDescription" : undefined}>Artesian Well</h5>
                            </div>
                        </div >

                        {/* <p>artesian_well</p>
                    {this.state.location.artesian_well ?
                        <button onClick={() => this.handleToggle("artesian_well", true)}>True</button> : <button onClick={() => this.handleToggle("artesian_well", false)}>False</button>
                    } */}

                        <h3>Access</h3>
                        <div className="AddTagWholeIcon">
                            {this.state.location.road_access ?
                                <div>
                                    <img src={PavedRoadBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("road_access", true)} />
                                </div>
                                :
                                <div >
                                    <img src={PavedRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("road_access", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.road_access ? "ActiveDescription" : undefined}>Paved Road</h5>
                            </div>
                        </div >

                        {/* <p>road_access</p>
                    {this.state.location.road_access ?
                        <button onClick={() => this.handleToggle("road_access", true)}>True</button> : <button onClick={() => this.handleToggle("road_access", false)}>False</button>
                    } */}

                        <div className="AddTagWholeIcon">
                            {this.state.location.dirt_road_access ?
                                <div>
                                    <img src={DirtRoadBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("dirt_road_access", true)} />
                                </div>
                                :
                                <div >
                                    <img src={DirtRoad} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("dirt_road_access", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.dirt_road_access ? "ActiveDescription" : undefined}>Dirt Road</h5>
                            </div>
                        </div >

                        {/* <p>THERE IS CURRENTLY NO DIRT ROAD PUT==================</p> */}



                        <div className="AddTagWholeIcon">
                            {this.state.location.trail_access ?
                                <div>
                                    <img src={PavedTrailBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("trail_access", true)} />
                                </div>
                                :
                                <div >
                                    <img src={PavedTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("trail_access", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.trail_access ? "ActiveDescription" : undefined}>Paved Trail</h5>
                            </div>
                        </div >

                        {/* <p>THERE IS CURRENTLY NO PAVED TRAIL PUT==================</p> */}


                        <div className="AddTagWholeIcon">
                            {this.state.location.dirt_trail_access ?
                                <div>
                                    <img src={DirtTrailBlue} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("dirt_trail_access", true)} />
                                </div>
                                :
                                <div >
                                    <img src={DirtTrail} alt="Free Icon" className="AddLocationIcon" onClick={() => this.handleToggle("dirt_trail_access", false)} />
                                </div>
                            }
                            <div className="AddTagDescription">
                                <h5 className={this.state.location.dirt_trail_access ? "ActiveDescription" : undefined}>Dirt Trail</h5>
                            </div>
                        </div>

                        {/* <p>THERE IS CURRENTLY NO DIRT TRAIL PUT==================</p> */}

                        {/* <p>trail_access</p>
                    {this.state.location.trail_access ?
                        <button onClick={() => this.handleToggle("trail_access", true)}>True</button> : <button onClick={() => this.handleToggle("trail_access", false)}>False</button>
                    } */}

                        <h3>Image</h3>
                        <div>
                            <input type="file" name="image" onChange={(event) => this.onchange(event)} />
                        </div>
                        <div>
                            <img className="ImagePreview" src={this.state.location.photo_primary} alt="Preview" />
                        </div>
                        <div className="approveLocationButton">
                            <h3>Approve</h3>
                            {this.state.location.approve ?
                                <Button onClick={() => this.handleToggle("approve", true)} color="primary" variant="contained">True</Button> : <Button onClick={() => this.handleToggle("approve", false)} color="secondary" variant="contained">False</Button>
                            }
                        </div>
                        <br />
                        <div className="submitDeleteLocationButton">
                            <Button onClick={this.handleSubmit} color="primary" variant="contained" className="submitDeleteLocationButtonGrid submitDeleteLocationButtonSingle">Submit</Button>
                            <p></p>
                            <Button onClick={this.handleDelete} color="secondary" variant="contained" className="submitDeleteLocationButtonGrid">Delete</Button>
                        </div>

                        <div className="navSpacer"></div>
                    </div>
                </MuiThemeProvider>


            </Router>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ModerateSingleLocation));