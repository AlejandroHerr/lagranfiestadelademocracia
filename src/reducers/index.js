import { combineReducers } from 'redux';

import data from './data';
import electoralSystem from './electoralSystem';
import view from './view';

export default combineReducers({
  data,
  electoralSystem,
  view,
});
