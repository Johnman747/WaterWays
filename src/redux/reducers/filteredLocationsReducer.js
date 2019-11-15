const filteredLocationsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FILTERED_LOCATIONS':
        return action.payload;
      default:
        return state;
    }
  };
  
export default filteredLocationsReducer;