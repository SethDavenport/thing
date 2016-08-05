import { Action, combineReducers } from 'redux';
import { CounterActions } from '../actions/counter.actions';

export function increment(): Action {
  return { type: CounterActions.INCREMENT }
}

export function decrement(): Action {
  return { type: CounterActions.DECREMENT };
}

function counterReducer(state = 0, action: Action) {
  switch(action.type) {
    case CounterActions.INCREMENT: return state + 1;
    case CounterActions.DECREMENT: return state - 1;
  }

  return state;
}

export interface IAppState {
  count?: number;
}

export const rootReducer = combineReducers({
  count: counterReducer
});
