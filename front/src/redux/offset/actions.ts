import { ActionType, createAction } from 'typesafe-actions';
import { IOffset, OffsetSelectType } from '../../lib/types';

export const OFFSET_PLUS_COUNT = 'offset/plusCount';

export const OFFSET_MINUS_COUNT = 'offset/minusCount';

export const plusOffsetCount = createAction(
  OFFSET_PLUS_COUNT,
)<OffsetSelectType>();

export const minusOffsetCount = createAction(
  OFFSET_MINUS_COUNT,
)<OffsetSelectType>();

const actions = { plusOffsetCount, minusOffsetCount };

export type OFFSET_ACTION = ActionType<typeof actions>;
