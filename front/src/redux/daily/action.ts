import { ActionType, createAction } from 'typesafe-actions';
import { SelectType } from '../../lib/types';

export const DAILY_SELECT = 'daily/selectQuestion';

export const DAILY_RESET = 'daily/reset';

export const setSelection = createAction(DAILY_SELECT)<SelectType>();

export const setDailyReset = createAction(DAILY_RESET)<undefined>();

const actions = { setSelection, setDailyReset };

export type DAILY_ACTION = ActionType<typeof actions>;
