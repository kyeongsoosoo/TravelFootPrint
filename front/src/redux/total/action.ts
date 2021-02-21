import { ActionType, createAction } from 'typesafe-actions';

export const TOTAL_SEMI = 'total/semi';

export const TOTAL_FINAL = 'total/final';

export const TOTAL_START = 'total/loadingStart';

export const TOTAl_FINISH = 'total/loadingFinish';

export const setSemiTotal = createAction(TOTAL_SEMI)<number>();

export const setFinalTotal = createAction(TOTAL_FINAL)<number>();

export const setLoadingStart = createAction(TOTAL_START)<undefined>();
export const setLoadingFinish = createAction(TOTAl_FINISH)<undefined>();

const actions = {
  setSemiTotal,
  setLoadingStart,
  setLoadingFinish,
  setFinalTotal,
};

export type TOTAL_ACTION = ActionType<typeof actions>;
