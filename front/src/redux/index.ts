import { combineReducers } from 'redux';
import { distance } from './distance/distance';
import { food } from './food/food';
import { location } from './location/location';
import { offset } from './offset/offset';
import { total } from './total/total';

export const rootReducer = combineReducers({
  food,
  distance,
  total,
  location,
  offset,
});

export type RootState = ReturnType<typeof rootReducer>;
