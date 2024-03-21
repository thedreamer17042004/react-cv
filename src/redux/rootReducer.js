import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';
import crudReducer from './crud/reducer';

// Combine all reducers.

const rootReducer = combineReducers({
  auth: authReducer,
  crud: crudReducer,

 
});

export default rootReducer;
