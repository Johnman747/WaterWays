import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./LocationPage.css"
import FreeIcon from '../Icons/FreeIcon.png';
import PaidIcon from '../Icons/PaidIcon.png';
import Spigot from '../Icons/SpigotIcon.png';
import FreeFlow from '../Icons/FreeFlowingIcon.png';
import RV from '../Icons/RvIcon.png';
import Tent from '../Icons/TentIcon.png';
import Well from '../Icons/ArtesianWellIcon.png';
import Trail from '../Icons/TrailSource.png';
import DirtRoad from '../Icons/DirtRoadIcon.png';
import DirtTrail from '../Icons/DirtTrailIcon.png';
import PavedRoad from '../Icons/PavedRoadIcon.png';
import PavedTrail from '../Icons/PavedTrailIcon.png'
import BackIcon from '../Icons/backArrowWhite.png'
import MenuModal from '../MenuModal/MenuModal'
import StarRating from '../StarRating/StarRating'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ReviewsPage from '../ReviewsPage/ReviewsPage';
import PhotosTab from '../PhotosTab/PhotosTab';
import ReportsPage from '../ReportsPage/ReportsPage';

function TabContainer(props) {
    return (
        <Typography component="div">
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    ModalButton: {
        background: '#3BA8FA'
    }

});


class LocationPage extends Component {
    state = {
        report_id: 1,
        value: 1,
        modal: false
    }


    componentDidMount() {
        this.getInfo();
        this.getPhotos();
        this.props.dispatch({type:'ADD_TO_HISTORY', payload: this.props.history.location.pathname})
        this.props.dispatch({ type: 'FETCH_REVIEWS', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'FETCH_REPORTS', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'FETCH_SINGLE_REPORT', payload: this.state.report_id });
        this.props.dispatch({ type: 'FETCH_PHOTOS', payload: this.props.match.params.id });
    }

    componentDidUpdate(preProps) {
        if (this.props.reduxStore.reportsReducer.length !== preProps.reduxStore.reportsReducer.length) {
            this.props.dispatch({ type: 'FETCH_REPORTS', payload: this.props.match.params.id });
        }
        if (this.props.reduxStore.reviewsReducer.length !== preProps.reduxStore.reviewsReducer.length) {
            this.props.dispatch({ type: 'FETCH_REVIEWS', payload: this.props.match.params.id });
        }
        if (this.props.reduxStore.PhotosReducer.length !== preProps.reduxStore.PhotosReducer.length) {
            this.props.dispatch({ type: 'FETCH_PHOTOS', payload: this.props.match.params.id });
        }
    }

    getInfo = () => {
        this.props.dispatch({ type: 'FETCH_SINGLE_LOCATION', payload: this.props.match.params.id })
    }
    getPhotos = () => {
        this.props.dispatch({ type: 'FETCH_SINGLE_PHOTO', payload: this.props.match.params.id })
    }

    BackButton = () => {
        this.props.history.push('/MapHome')
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    modalChange = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        const { value } = this.state;

        return (
            <div className={this.state.modal ? "ModalBackground" : undefined}>
                {this.props.reduxStore.SingleLocationReducer.map(location =>
                    <div key={location.id}>
                        <img onClick={this.BackButton} className="backIcon" src={BackIcon} alt="Back Icon" />
                        <div className="imageCut">
                            <img src={location.photo_primary} className="LocationImage" alt="Location" />
                        </div>
                        <div className="BlueBarLocaionPage"></div>
                        <div className="DetailsDisplay">
                            <h1 className="LocationName">{location.name}</h1>
                            <h3>{location.address}</h3>
                            <p>{location.description}</p>
                            <div className="detailsHeader">
                                <h2>Details</h2>
                            </div>
                            <div className="starRating">
                                <StarRating />
                            </div>
                            <div className="IconContainer">
                                {location.free ?
                                    <div className="DetailItem">
                                        <img className="icon" src={FreeIcon} alt="Free Icon" />
                                        <h5 className="tagDescription">Paid</h5>
                                    </div>
                                    :
                                    <div className="DetailItem">
                                        <img className="icon" src={PaidIcon} alt="Paid Icon" />
                                        <h5 className="tagDescription">Paid</h5>
                                    </div>
                                }
                                {location.spigot &&
                                    <div className="DetailItem">
                                        <img className="icon" src={Spigot} alt="Spigot Icon" />
                                        <h5 className="tagDescription">Spigot</h5>
                                    </div>
                                }
                                {location.free_flowing &&
                                    <div className="DetailItem">
                                        <img className="icon" src={FreeFlow} alt="Free Flow Icon" />
                                        <h5 className="tagDescription">Free Flowing</h5>
                                    </div>
                                }
                                {location.trail_water_source &&
                                    <div className="DetailItem">
                                        <img className="icon" src={Trail} alt="Trail Access Icon" />
                                        <h5 className="tagDescription">Trail Source</h5>
                                    </div>
                                }
                                {location.rv &&
                                    <div className="DetailItem">
                                        <img className="icon" src={RV} alt="RV Station Icon" />
                                        <h5 className="tagDescription">RV</h5>
                                    </div>
                                }
                                {location.campground_access &&
                                    <div className="DetailItem">
                                        <img className="icon" src={Tent} alt="Campground Access Icon" />
                                        <h5 className="tagDescription">Campground</h5>
                                    </div>
                                }
                                {location.artesian_well &&
                                    <div className="DetailItem">
                                        <img className="icon" src={Well} alt="Artesian Well Icon" />
                                        <h5 className="tagDescription">Artesian Well</h5>
                                    </div>
                                }
                                {location.dirt_road_access &&
                                    <div className="DetailItem">
                                        <img className="icon" src={DirtRoad} alt="Artesian Well Icon" />
                                        <h5 className="tagDescription">Dirt Road Access</h5>
                                    </div>
                                }
                                {location.dirt_trail_access &&
                                    <div className="DetailItem">
                                        <img className="icon" src={DirtTrail} alt="Artesian Well Icon" />
                                        <h5 className="tagDescription">Dirt Trail Access</h5>
                                    </div>
                                }
                                {location.trail_access &&
                                    <div className="DetailItem">
                                        <img className="icon" src={PavedTrail} alt="Artesian Well Icon" />
                                        <h5 className="tagDescription">Paved Trail Access</h5>
                                    </div>
                                }
                                {location.road_access &&
                                    <div className="DetailItem">
                                        <img className="icon" src={PavedRoad} alt="Artesian Well Icon" />
                                        <h5 className="tagDescription">Paved Road Access</h5>
                                    </div>
                                }
                            </div>
                             {this.props.reduxStore.user.id ?
                            <div className="modalButton" >
                                <MenuModal locationInfo={location.id} modalChange={this.modalChange} />
                            </div>
                             :(null)
                            }  
                        </div>
                    </div>
                )}
                <div className="LocationPageTabs">
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant='fullWidth'
                        >
                            <Tab label="Activity Log" />
                            <Tab label="Reviews" />
                            <Tab label="Photos" />

                        </Tabs>
                    </AppBar>
                    {value === 0 && <div className="TabPage"><TabContainer classes={styles.root}><ReportsPage /></TabContainer> </div>}
                    {value === 1 && <div className="TabPage"><TabContainer><ReviewsPage /></TabContainer></div>}
                    {value === 2 && <div className="TabPage"><TabContainer><PhotosTab /></TabContainer></div>}

                </div>
                <div className="navSpacer"></div>
            </div>
        )
    }
}

LocationPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default withStyles(styles)(withRouter(connect(mapStateToProps)(LocationPage)));