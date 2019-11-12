const SingleReport = (state = [], action) => {
    switch (action.type) {
      case 'SET_SINGLE_REPORT':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default SingleReport;