import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phoneActions from './phone-actions';

const items = createReducer([], {
  [phoneActions.addContact]: (state, { payload }) => [payload, ...state],
  [phoneActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [phoneActions.findContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
