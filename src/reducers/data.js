import rawDataLoader from '../services/rawDataLoader';
import { CHANGE_ELECTORAL_DISTRICT_TYPE } from '../actions/electoralSystem';

const initialState = {
  parties: rawDataLoader.getParties(),
  regions: rawDataLoader.getRegions(),
  results: rawDataLoader.getResultsByType(2),
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_ELECTORAL_DISTRICT_TYPE:
      return {
        ...state,
        results: payload.results,
      };
    default:
      return state;
  }
};

export default dataReducer;
