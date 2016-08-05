import { Action, combineReducers } from 'redux';

const INCREMENT = 'INCREMENTTT';
const DECREMENT = 'DECREMENT';

export function increment(): Action {
  return { type: INCREMENT }
}

export function decrement(): Action {
  return { type: DECREMENT };
}

function counterReducer(state = 0, action: Action) {
  switch(action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
  }

  return state;
}

export interface IAppState {
  count?: number;
}

export const rootReducer = combineReducers({
  count: counterReducer
});
