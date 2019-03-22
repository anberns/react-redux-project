import { combineReducers } from 'redux';
//import usersReducer from './usersReducer';
import studentsReducer from './studentsReducer';

const rootReducer = combineReducers({
  //users: usersReducer,
  students: studentsReducer
})

export default rootReducer;