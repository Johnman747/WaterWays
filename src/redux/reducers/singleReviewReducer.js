const SingleReview = (state = [], action) => {
    switch (action.type) {
      case 'SET_SINGLE_REVIEW':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default SingleReview;