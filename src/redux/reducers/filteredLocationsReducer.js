const filteredLocationsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FILTERS':
        return action.payload;
      case 'CLEAR_FILTERS':
        state = {locationFilters:
        {
            free: false,
            spigot: false,
            trail_access: false,
            road_access: false,
            campground_access: false,
            free_flowing: false,
            artesian_well: false,
            rv: false,
            trail_water_source: false,
            dirt_road_access: false,
            dirt_trail_access: false
        }
      }
      return state;
      default:
        return state;
    }
  };
  
export default filteredLocationsReducer;