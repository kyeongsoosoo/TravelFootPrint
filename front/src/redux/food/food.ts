/* eslint-disable @typescript-eslint/indent */
import { createReducer } from 'typesafe-actions';
import { FOOD_ACTION, FOOD_TOGGLE } from './action';

export type FOOD_STATE = {
  [boxName: string]: {
    cost: number;
  } | null;
};

const initialState: FOOD_STATE = {};

export const food = createReducer<FOOD_STATE, FOOD_ACTION>(initialState, {
  [FOOD_TOGGLE]: (state, action) => {
    let foodCost = action.payload.cost;
    if (typeof foodCost === 'boolean') foodCost = 0;
    if (state[action.payload.name] === null)
      return {
        ...state,
        [action.payload.name]: {
          cost: foodCost,
        },
      };
    else
      return {
        ...state,
        [action.payload.name]: state.hasOwnProperty(`${action.payload.name}`)
          ? null
          : {
              cost: foodCost,
            },
      };
  },
});
