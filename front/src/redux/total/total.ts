import { createReducer } from 'typesafe-actions';
import {
  TOTAL_ACTION,
  TOTAL_FINAL,
  TOTAl_FINISH,
  TOTAL_RESET,
  TOTAL_SEMI,
  TOTAL_START,
  TOTAL_TRAVEL,
} from './action';

type TOTAL_STATE = {
  semi: number;
  final: number | null;
  travel: number;
  loading: boolean;
};

const initailState: TOTAL_STATE = {
  semi: 0,
  final: null,
  travel: 0,
  loading: false,
};

export const total = createReducer<TOTAL_STATE, TOTAL_ACTION>(initailState, {
  [TOTAL_SEMI]: (state, action) => ({
    ...state,
    semi: action.payload,
  }),
  [TOTAL_FINAL]: (state, action) => ({
    ...state,
    final: action.payload,
  }),
  [TOTAL_START]: state => ({
    ...state,
    loading: true,
  }),
  [TOTAl_FINISH]: state => ({
    ...state,
    loading: false,
  }),
  [TOTAL_TRAVEL]: (state, action) => ({
    ...state,
    travel: action.payload,
  }),
  [TOTAL_RESET]: () => {
    return initailState;
  },
});
