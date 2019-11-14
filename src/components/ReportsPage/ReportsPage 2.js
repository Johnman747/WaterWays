import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ReportsPage extends Component{
    

    render(){
        return(

            <div className='ReportsBody'>
                {this.props.reduxStore.reportsReducer.map( report => {
                    return <p key={report.id}>{report.issue_comment}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});
export default withRouter(connect(mapStateToProps)(ReportsPage));