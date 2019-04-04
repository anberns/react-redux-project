import { combineReducers } from 'redux';
import userReducer from './userReducer';
import studentsReducer from './studentsReducer';
import phonemesReducer from './phonemesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  students: studentsReducer,
  phonemes: phonemesReducer
})

export default rootReducer;