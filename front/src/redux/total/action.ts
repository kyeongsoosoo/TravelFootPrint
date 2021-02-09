import { ActionType, createAction } from 'typesafe-actions';

export const TOTAL_SEMI = 'total/semi';

export const TOTAL_START = 'total/loadingStart';

export const TOTAl_FINISH = 'total/loadingFinish';

export const setSemiTotal = createAction(TOTAL_SEMI)<number>();
export const setLoadingStart = createAction(TOTAL_START)<undefined>();
export const setLoadingFinish = createAction(TOTAl_FINISH)<undefined>();

const actions = { setSemiTotal, setLoadingStart, setLoadingFinish };

export type TOTAL_ACTION = ActionType<typeof actions>;
