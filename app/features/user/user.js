import {createStructuredSelector} from 'reselect';

const {Map} = require('immutable');
export const NAME = 'user'; // name in redux store

const GET_TRY = 'user/GET_TRY';
const GET_SUCCESS = 'user/GET_SUCCESS';
const GET_FAILED = 'user/GET_FAILED';

const LOGIN_TRY = 'user/LOGIN_TRY';
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_FAILED = 'user/LOGIN_FAILED';

const initialState = Map({
  user: null, // when logged in - map with all user's data
  loadingLogin: false,
  loadingRegister: false,
  loadingReset: false,
  loadingUpdate: false,
  loadingGet: false,
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_TRY:
      return state.set('loadingGet', true);
    case GET_FAILED:
      return state.set('loadingGet', false);
    case GET_SUCCESS:
      return state.set('loadingGet', false);

    case LOGIN_TRY:
      return state.set('loadingLogin', true);
    case LOGIN_FAILED:
      return state.set('loadingLogin', false);
    case LOGIN_SUCCESS:
      return state.set('loadingLogin', false);
    default:
      return state;
  }
}

// #### ACTIONS ####
function login({email, password}) {
  return {type: LOGIN_TRY, data: {email, password}};
}

function get({userToken}) {
  return {type: GET_TRY, data: {userToken}};
}

// #### SELECTORS ####
const user = (state) => state[NAME];

function isLoadingUser(state) {
  return state[NAME].get('loadingLogin')
    || state[NAME].get('loadingRegister')
    || state[NAME].get('loadingReset')
    || state[NAME].get('loadingUpdate')
    || state[NAME].get('loadingGet');
}


export const selector = createStructuredSelector({
  user,
  isLoadingUser,
});

export const actionCreators = {
  get,
  login,
};

export const actionTypes = {
  GET_TRY,
  GET_SUCCESS,
  GET_FAILED,
  LOGIN_TRY,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
};
