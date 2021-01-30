import { ActionType, createAction } from 'typesafe-actions';

export const FOOD_PLUS_COUNT = 'food/plusCount';

export const FOOD_MINUS_COUNT = 'food/minusCount';

export const plusCount = createAction(FOOD_PLUS_COUNT)<string>();

export const minusCount = createAction(FOOD_MINUS_COUNT)<string>();

const actions = { plusCount, minusCount };

export type FOOD_ACTION = ActionType<typeof actions>;
