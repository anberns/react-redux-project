import { combineReducers } from 'redux';
import userReducer from './userReducer';
import studentsReducer from './studentsReducer';
import phonemesReducer from './phonemesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  students: studentsReducer,
  phonemes: phonemesReducer
})

export default rootReducer;