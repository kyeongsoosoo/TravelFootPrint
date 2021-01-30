import { createReducer } from 'typesafe-actions';
import { FOOD_ACTION, FOOD_MINUS_COUNT, FOOD_PLUS_COUNT } from './action';

type FOOD_STATE = {
  [boxName: string]: number;
};

const initialState: FOOD_STATE = {};

export const food = createReducer<FOOD_STATE, FOOD_ACTION>(initialState, {
  [FOOD_PLUS_COUNT]: (state, action) => ({
    ...state,
    [action.payload]: state.hasOwnProperty(`${action.payload}`)
      ? state[action.payload] + 1
      : 1,
  }),
  [FOOD_MINUS_COUNT]: (state, action) => ({
    ...state,

    [action.payload]: state.hasOwnProperty(`${action.payload}`)
      ? state[action.payload] - 1
      : 0,
  }),
});
