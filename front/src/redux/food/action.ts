import { ActionType, createAction } from 'typesafe-actions';
import { SelectType } from '../../lib/types';
import { foodItem } from './type';

export const FOOD_TOGGLE = 'food/toggle';

export const toggleFood = createAction(FOOD_TOGGLE)<SelectType>();

const actions = { toggleFood };

export type FOOD_ACTION = ActionType<typeof actions>;
