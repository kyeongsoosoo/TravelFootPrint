import { ActionType, createAction } from 'typesafe-actions';
import { SelectType } from '../../lib/types';
import { foodItem } from './type';

export const FOOD_TOGGLE = 'food/toggle';

export const FOOD_RESET = 'food/reset';

export const toggleFood = createAction(FOOD_TOGGLE)<SelectType>();

export const resetFood = createAction(FOOD_RESET)<undefined>();

const actions = { toggleFood, resetFood };

export type FOOD_ACTION = ActionType<typeof actions>;
