import { ActionType, createAction } from 'typesafe-actions';
import { SelectType } from '../../lib/types';

export const DAILY_SELECT = 'daily/selectQuestion';

export const setSelection = createAction(DAILY_SELECT)<SelectType>();

const actions = { setSelection };

export type DAILY_ACTION = ActionType<typeof actions>;
