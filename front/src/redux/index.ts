import { combineReducers } from 'redux';
import { distance } from './distance/distance';
import { food } from './food/food';
import { total } from './total/total';

export const rootReducer = combineReducers({ food, distance, total });

export type RootState = ReturnType<typeof rootReducer>;
