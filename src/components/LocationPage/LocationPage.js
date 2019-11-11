import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./LocationPage.css"
import FreeIcon from '../Icons/FreeIcon.png';
import PaidIcon from '../Icons/PaidIcon.png';
import Spigot from '../Icons/SpigotIcon.png';
import FreeFlow from '../Icons/FreeFlowingIcon.png';
import RV from '../Icons/RvIcon.png';
import Tent from '../Icons/TentIcon.png';
import Well from '../Icons/ArtesianWellIcon.png';
import Trail from '../Icons/TrailSource.png';

class LocationPage extends Component {
    state = {
    }

    componentDidMount() {
        this.getInfo();
    }

    getInfo = () => {
        this.props.dispatch({ type: 'FETCH_SINGLELOCATION', payload: this.props.match.params.id })
    }

    render() {
        return (
            <>
                {this.props.reduxStore.SingleLocationReducer.map(location =>
                    <div key={location.id}>
                        <img alt="Location Photo"/>
                        <h1>{location.name}</h1>
                        <h3>{location.address}</h3>
                        <p>{location.description}</p>
                        <h3>Details</h3>
                        <h3>Star Rating</h3>
                        {location.free?
                        <img className="icon" src={FreeIcon} alt="Free Icon"/>
                        :
                        <img className="icon" src={PaidIcon} alt="Paid Icon"/>
                        }
                        {location.spigot?
                        <img className="icon" src={Spigot} alt="Spigot Icon"/>
                        :
                        ""
                        }
                        {location.free_flowing?
                        <img className="icon" src={FreeFlow} alt="Free Flow Icon"/>
                        :
                        ""
                        }
                        {location.trail_access?
                        <img className="icon" src={Trail} alt="Trail Access Icon"/>
                        :
                        ""
                        }
                        {location.RV_Station?
                        <img className="icon" src={RV} alt="RV Station Icon"/>
                        :
                        ""
                        }
                        {location.campground_access?
                        <img className="icon" src={Tent} alt="Campground Access Icon"/>
                        :
                        ""
                        }
                        {location.artesian_well?
                        <img className="icon" src={Well} alt="Artesian Well Icon"/>
                        :
                        ""
                        }
                    </div>

                )}
            </>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(LocationPage);