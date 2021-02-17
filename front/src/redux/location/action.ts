import { ActionType, createAction } from 'typesafe-actions';

export const LOCATION_SEARCH = 'location/search';

export const getLoacaData = createAction(LOCATION_SEARCH)<any>();

const actions = { getLoacaData };

export type LocationAction = ActionType<typeof actions>;
