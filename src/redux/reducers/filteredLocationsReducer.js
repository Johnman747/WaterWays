const filteredLocationsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FILTERS':
        return action.payload;
      default:
        return state;
    }
  };
  
export default filteredLocationsReducer;