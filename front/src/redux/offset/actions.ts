import { ActionType, createAction } from 'typesafe-actions';
import { IOffset } from '../../lib/types';

export const OFFSET_PLUS_COUNT = 'offset/plusCount';

export const OFFSET_MINUS_COUNT = 'offset/minusCount';

export const plusOffsetCount = createAction(OFFSET_PLUS_COUNT)<IOffset>();

export const minusOffsetCount = createAction(OFFSET_MINUS_COUNT)<IOffset>();

const actions = { plusOffsetCount, minusOffsetCount };

export type OFFSET_ACTION = ActionType<typeof actions>;
