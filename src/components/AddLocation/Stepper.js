import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MobileStepper } from '@material-ui/core';
import swal from 'sweetalert';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: '#80B8E4',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    Dots: {
        backgroundColor: 'white',
    }
}));

function getSteps() {
    return ["", "", ""];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return '';
        case 1:
            return '';
        case 2:
            return '';
        default:
            return 'Unknown stepIndex';
    }
}

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red
    },
    typography: {
        useNextVariants: true,
    },
});


export default function HorizontalLabelPositionBelowStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        props.handleNext();
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        props.handleBack();
    };

    const handleSubmit = () => {
        swal({
            title: 'Thank you!',
            text: 'This location will be sent to a moderator for approval.'
        }).then(() => {
            setActiveStep(0);
            props.handleSubmit();
            props.handleReset();
        })
    };

    return (
        <MuiThemeProvider theme={theme}>
            <div  className="Stepper">
                <div className={classes.root}>
                    <div className="StepDots">
                        <MobileStepper
                            variant="dots"
                            steps={3}
                            position="static"
                            activeStep={activeStep}
                            className={classes.Dots}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                                </Button>
                            {activeStep === steps.length - 1 ?
                                <Button variant="contained" color="primary" onClick={handleSubmit}>
                                    Finish
                            </Button>
                                :
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    Next
                            </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
}