import { createReducer } from 'typesafe-actions';
import { TOTAL_ACTION, TOTAl_FINISH, TOTAL_SEMI, TOTAL_START } from './action';

type TOTAL_STATE = {
  semi: number | null;
  final: number | null;
  loading: boolean;
};

const initailState: TOTAL_STATE = {
  semi: null,
  final: null,
  loading: false,
};

export const total = createReducer<TOTAL_STATE, TOTAL_ACTION>(initailState, {
  [TOTAL_SEMI]: (state, action) => ({
    ...state,
    semi: action.payload,
  }),
  [TOTAL_START]: state => ({
    ...state,
    loading: true,
  }),
  [TOTAl_FINISH]: state => ({
    ...state,
    loading: false,
  }),
});
