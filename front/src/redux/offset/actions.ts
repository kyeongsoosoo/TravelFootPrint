import { ActionType, createAction } from 'typesafe-actions';
import { IOffset, OffsetSelectType } from '../../lib/types';

export const OFFSET_PLUS_COUNT = 'offset/plusCount';

export const OFFSET_MINUS_COUNT = 'offset/minusCount';

export const OFFSET_RESET = 'offset/reset';

export const plusOffsetCount = createAction(
  OFFSET_PLUS_COUNT,
)<OffsetSelectType>();

export const minusOffsetCount = createAction(
  OFFSET_MINUS_COUNT,
)<OffsetSelectType>();

export const resetOffset = createAction(OFFSET_RESET)<undefined>();

const actions = { plusOffsetCount, minusOffsetCount, resetOffset };

export type OFFSET_ACTION = ActionType<typeof actions>;
