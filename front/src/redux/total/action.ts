import { ActionType, createAction } from 'typesafe-actions';

export const TOTAL_SEMI = 'total/semi';

export const TOTAL_FINAL = 'total/final';

export const TOTAL_START = 'total/loadingStart';

export const TOTAl_FINISH = 'total/loadingFinish';

export const TOTAL_TRAVEL = 'total/travel';

export const TOTAL_RESET = 'total/reset';

export const setSemiTotal = createAction(TOTAL_SEMI)<number>();

export const setFinalTotal = createAction(TOTAL_FINAL)<number>();

export const setTravelTotal = createAction(TOTAL_TRAVEL)<number>();

export const setLoadingStart = createAction(TOTAL_START)<undefined>();
export const setLoadingFinish = createAction(TOTAl_FINISH)<undefined>();

export const resetTotal = createAction(TOTAL_RESET)<undefined>();

const actions = {
  setTravelTotal,
  setSemiTotal,
  setLoadingStart,
  setLoadingFinish,
  setFinalTotal,
  resetTotal,
};

export type TOTAL_ACTION = ActionType<typeof actions>;
