import {
  CHANGE_ELECTORAL_DISTRICT_TYPE,
  CHANGE_ALLOCATION_METHOD,
  CHANGE_MIN_THRESHOLD,
} from '../actions/electoralSystem';
import { seatAllocationMethodTypes } from '../constants/seatAllocation';

const initialState = {
  electoralDistrictType: 2,
  allocationMethod: seatAllocationMethodTypes.D_HONDT,
  minThreshold: 3,
};

const electoralSystemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_ALLOCATION_METHOD:
      return {
        ...state,
        allocationMethod: payload.allocationMethod,
      };
    case CHANGE_ELECTORAL_DISTRICT_TYPE:
      return {
        ...state,
        electoralDistrictType: payload.regionType,
      };
    case CHANGE_MIN_THRESHOLD:
      return {
        ...state,
        minThreshold: payload.minThreshold,
      };
    default:
      return state;
  }
};

export default electoralSystemReducer;
