const SingleLocationReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_SINGLELOCATION':
        return action.payload;
      case 'CLEAR_SINGLELOCATION':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default SingleLocationReducer;