/* eslint-disable @typescript-eslint/indent */
import { createReducer } from 'typesafe-actions';
import { FOOD_ACTION, FOOD_MINUS_COUNT, FOOD_PLUS_COUNT } from './action';

export type FOOD_STATE = {
  [boxName: string]: {
    count: number;
    weight: number;
  };
};

const initialState: FOOD_STATE = {};

export const food = createReducer<FOOD_STATE, FOOD_ACTION>(initialState, {
  [FOOD_PLUS_COUNT]: (state, action) => ({
    ...state,
    [action.payload.name]: state.hasOwnProperty(`${action.payload.name}`)
      ? {
          count: state[action.payload.name].count + 1,
          weight: state[action.payload.name].weight + action.payload.weight,
        }
      : {
          count: 1,
          weight: action.payload.weight,
        },
  }),
  [FOOD_MINUS_COUNT]: (state, action) => ({
    ...state,
    [action.payload.name]:
      state.hasOwnProperty(`${action.payload.name}`) &&
      state[action.payload.name].count > 0
        ? {
            count: state[action.payload.name].count - 1,
            weight: state[action.payload.name].weight - action.payload.weight,
          }
        : {
            count: 0,
            weight: 0,
          },
  }),
});
