import React, { Component } from 'react';
import AddImage from '../AddImage/AddImage'
import { withRouter } from 'react-router-dom';
// ---- Material UI ---- //
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import AddIcon from '@material-ui/icons/Add';
import './MenuModal.css'

function getModalStyle() {
    const top = 50 
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        // background:'linear-gradient(45deg, #9898FA 30%, #98FAFA 90%)',
        position: 'absolute',
        width: theme.spacing(12),
        height: theme.spacing(52),
        boxShadow: theme.shadows[5],
        padding: theme.spacing(20),
        paddingLeft: theme.spacing(20),
        outline: 'none',
    },
    modalbutton:{
        backgroundColor: "#3BA8FA",
    }
});


class MenuModal extends Component {
    state = {
        isOpen: false,
    };

    handle_Modal = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
        this.props.modalChange()
    }
    handle_Resolve_Report = () =>{
        this.props.history.push(`/addreport/${this.props.locationInfo}`)
    }
    handle_Review = () =>{
        this.props.history.push(`/addreview/${this.props.locationInfo}`)
    }

    render() {
        const { classes } = this.props;
        const showContent = this.state.isOpen;

        return (
            <div>
                <Modal
                    open={this.state.isOpen}
                    onClose={this.handle_Modal}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        {showContent === true &&
                                <div className="modalWindow">
                                    <h4>Report/</h4><h4>Resolve</h4>
                                    <Fab onClick={this.handle_Resolve_Report} color="primary" aria-label="Report"><ReportProblemIcon/></Fab>
                                    <br />
                                    <br />
                                    <h4>Review</h4>
                                    <Fab onClick={this.handle_Review} color="primary" aria-label="Review"><RateReviewIcon/></Fab>
                                    <br />
                                    <br />
                                    <h4>Image</h4>
                                    <AddImage locationId={this.props.locationInfo} />
                                    <br />
                                    <Fab onClick={this.handle_Modal} color="primary" aria-label="Cancel" className={classes.fab}><ClearSharpIcon/></Fab>
                                </div>
                        }
                    </div>
                </Modal>
                {showContent === false &&
                <Fab classes={classes.modalbutton} onClick={this.handle_Modal} color="primary" aria-label="Add" className="modalIcon"><AddIcon/></Fab>
                }
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(MenuModal));