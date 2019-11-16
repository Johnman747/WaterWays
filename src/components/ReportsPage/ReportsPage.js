import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ReportsPage extends Component {
    render() {
        return (

            <div className='ReportsBody'>
                {this.props.reduxStore.reportsReducer.map(report => {
                    return (
                        <div className="ReviewDiv" key={report.id}>
                            <div className="reportNameDiv">
                                <h4 className="ReportName">{report.first_name}</h4>
                                <h5 className="ReportName">{report.last_name}</h5>
                            </div>
                            <div className="ReportIssue">
                                <h5>{report.issue_type}</h5>
                                <p>"{report.issue_comment}"</p>
                            </div>
                            <div className="LineSplitter"></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ReportsPage));