import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';

class ModerateSingleLocation extends Component {

    // Fetches single location by ID.
    componentDidMount() {
        console.log(this.props.match.params);
        this.props.dispatch({ type: 'FETCH_SINGLE_LOCATION', payload: this.props.match.params.id })
    } // end componentDidMount


    handleBack = () => {
        this.props.history.push("/ModerateLocation")
    }

    render() {
        return (
            <Router>
                <div className="moderateSingleLocation">
                    <button onClick={this.handleBack}>Back</button>
                    <h1>Location Details:</h1>
                    <p>Update Location details.</p>

                </div>
            </Router>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ModerateSingleLocation));