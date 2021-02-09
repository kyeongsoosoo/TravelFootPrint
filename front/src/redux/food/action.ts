import { ActionType, createAction } from 'typesafe-actions';
import { foodItem } from './type';

export const FOOD_PLUS_COUNT = 'food/plusCount';

export const FOOD_MINUS_COUNT = 'food/minusCount';

export const plusCount = createAction(FOOD_PLUS_COUNT)<foodItem>();

export const minusCount = createAction(FOOD_MINUS_COUNT)<foodItem>();

const actions = { plusCount, minusCount };

export type FOOD_ACTION = ActionType<typeof actions>;
