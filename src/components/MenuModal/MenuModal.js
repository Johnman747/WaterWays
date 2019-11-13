import React, { Component } from 'react';
import AddImage from '../AddImage/AddImage'
import { withRouter } from 'react-router-dom';
// ---- Material UI ---- //
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import AddIcon from '@material-ui/icons/Add';

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

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
        position: 'absolute',
        width: theme.spacing.unit * 10,
        // backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 20,
        paddingLeft: theme.spacing.unit *20,
        outline: 'none',   
    },
});


class MenuModal extends Component {
    state = {
        isOpen: false,
    };

    handle_Modal = () => {
        console.log('Clicked Modal');
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }

    handle_Resolve_Report = () => {
        this.history.push()
    }
    handle_Review = () => {
        this.history.push()
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
                        {
                            showContent === true ?
                                <div className="modalWindow">
                                    <Fab onClick={this.handle_Resolve_Report} color="primary" aria-label="Report"><ReportProblemIcon/></Fab>
                                    <br />
                                    <br />
                                    <Fab onClick={this.handle_Review} color="primary" aria-label="Review"><RateReviewIcon/></Fab>
                                    <br />
                                    <br />
                                    <AddImage locationId={this.props.locationInfo} />
                                    <br />
                                    <Fab onClick={this.handle_Modal} color="primary" aria-label="Cancel" className={classes.fab}><ClearSharpIcon/></Fab>
                                </div>
                                :
                                (null)
                        }
                    </div>
                </Modal>
                <Fab onClick={this.handle_Modal} color="primary" aria-label="Add" className="modalIcon"><AddIcon/></Fab>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(MenuModal));




// import React, {Component} from 'react';
// import AddImage from '../AddImage/AddImage'
// import {withRouter} from 'react-router-dom';

// class MenuModal extends Component {
//     state = { 
//         isOpen: false, 
//     };

//     handle_Modal = () =>{
//         this.setState(prevState => ({
//             isOpen: !prevState.isOpen,
//         }));
//     }
//     handle_Resolve_Report = () =>{
//         this.history.push()
//     }
//     handle_Review = () =>{
//         this.history.push()
//     }

//   render() {
//       const showContent = this.state.isOpen;
//     return (
//         <div>
//             {
//                 showContent === true ? 
//                 <div>
//                     <button onClick={this.handle_Resolve_Report}>Resolve/Report a Problem</button>
//                     <button onClick={this.handle_Review}>Leave a Review</button>
//                     <AddImage locationId={this.props.locationInfo}/>
//                 </div>
//                 :
//                 (null)
//             }
//             <button onClick={this.handle_Modal}>Modal</button>
//         </div>
//   )}
// }

// export default withRouter(MenuModal);