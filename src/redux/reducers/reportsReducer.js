const reportsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_REPORTS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default reportsReducer;