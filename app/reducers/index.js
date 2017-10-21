import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import userReducer, {NAME as userName} from 'features/user';

export default combineReducers({
  [userName]: userReducer,
  routing,
});
