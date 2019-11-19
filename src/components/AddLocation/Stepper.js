import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MobileStepper } from '@material-ui/core';
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
    Dots:{
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
        setActiveStep(0);
        props.handleSubmit();
        props.handleReset();
    };

    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root} className="Stepper">
            <div className="StepDots">
            <MobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                className={classes.Dots}
            />
            </div>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </div>
                ) : (
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
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
        </MuiThemeProvider>
    );
}