const allUserReducer = (state = [], action) => {
    // console.log(action.payload);
    // console.log(state);
    switch (action.type) {
      case 'SET_ALL_USER_INFO':
        return action.payload;
      default:
        return state;
    }
  };
  
export default allUserReducer;