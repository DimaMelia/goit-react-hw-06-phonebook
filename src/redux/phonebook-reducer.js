import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phoneActions from './phone-actions';

const items = createReducer([], {
  [phoneActions.addContact]: (state, { payload }) => [payload, ...state],
  [phoneActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [payload, ...state];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [phoneActions.findContacts]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGEFILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
