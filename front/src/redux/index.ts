import { combineReducers } from 'redux';
import { food } from './food/food';

export const rootReducer = combineReducers({ food });

export type RootState = ReturnType<typeof rootReducer>;
