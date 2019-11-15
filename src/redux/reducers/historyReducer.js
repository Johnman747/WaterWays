const historyReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_HISTORY':
        return [...state, action.payload];
      default:
        return state;
    }
  };

// loginMode will be on the redux state at:
// state.loginMode
  export default historyReducer;
  