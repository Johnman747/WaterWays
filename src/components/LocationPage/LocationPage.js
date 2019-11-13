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
import BackIcon from '../Icons/backArrowWhite.png'
import MenuModal from '../MenuModal/MenuModal'
import StarRating from '../StarRating/StarRating'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD

import ReviewsPage from '../ReviewsPage/ReviewsPage';
=======
import ReviewsPage from '../ReviewsPage/ReviewsPage';
import PhotosTab from '../PhotosTab/PhotosTab';
>>>>>>> d3aa67ff5c937ac82bcfdca7938735ecfec14c13
import ReportsPage from '../ReportsPage/ReportsPage';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

const styles = {
    root: {
      flexGrow: 1,
    },
  };
  
  
class LocationPage extends Component {
    state = {
        report_id: 1,
        value: 0
    }
    

    componentDidMount() {
        this.getInfo();
        this.getPhotos();
        this.props.dispatch({type: 'FETCH_REVIEWS', payload: this.props.match.params.id});
        this.props.dispatch({type: 'FETCH_REPORTS', payload: this.props.match.params.id});
        this.props.dispatch({type: 'FETCH_SINGLE_REPORT', payload: this.state.report_id});
        this.props.dispatch({type: 'FETCH_PHOTOS', payload: this.props.match.params.id});
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

    render() {
        const { value } = this.state;
        return (
            <>
                {this.props.reduxStore.SingleLocationReducer.map(location =>
                    <div key={location.id}>
                        <img onClick={this.BackButton} className="backIcon" src={BackIcon} alt="Back Icon" />
                        <img alt="Location Photo" />
                        <h1>{location.name}</h1>
                        <h3>{location.address}</h3>
                        <p>{location.description}</p>
                        <StarRating />
                        <h3>Details</h3>
                        {location.free?
                        <img className="icon" src={FreeIcon} alt="Free Icon"/>
                        :
                        <img className="icon" src={PaidIcon} alt="Paid Icon"/>
                        }
                        {location.spigot ?
                            <img className="icon" src={Spigot} alt="Spigot Icon" />
                            :
                            ""
                        }
                        {location.free_flowing ?
                            <img className="icon" src={FreeFlow} alt="Free Flow Icon" />
                            :
                            ""
                        }
                        {location.trail_access ?
                            <img className="icon" src={Trail} alt="Trail Access Icon" />
                            :
                            ""
                        }
                        {location.RV_Station ?
                            <img className="icon" src={RV} alt="RV Station Icon" />
                            :
                            ""
                        }
                        {location.campground_access ?
                            <img className="icon" src={Tent} alt="Campground Access Icon" />
                            :
                            ""
                        }
                        {location.artesian_well ?
                            <img className="icon" src={Well} alt="Artesian Well Icon" />
                            :
                            ""
                        }

                        <MenuModal locationInfo={location.id} />

                    
                    
                    </div>
                )}
                <div>
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
                {value === 0 && <TabContainer><ReportsPage/></TabContainer>}
                {value === 1 && <TabContainer><ReviewsPage/></TabContainer>}
<<<<<<< HEAD
                {value === 2 && <TabContainer>Photos</TabContainer>}
=======
                {value === 2 && <TabContainer><PhotosTab /></TabContainer>}
>>>>>>> d3aa67ff5c937ac82bcfdca7938735ecfec14c13
                    
                </div>  
                   
                

            </>
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