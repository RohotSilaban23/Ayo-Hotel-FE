import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Alice',
    'Bob',
    'Sammy',
  ],
  isLogin:true
};

const AyoHotelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ISLOGIN':
        return {
            ...state,
            isLogin:true
        }
    default:
      return state;
  }
};

export default combineReducers({
    AyoHotel: AyoHotelReducer
});