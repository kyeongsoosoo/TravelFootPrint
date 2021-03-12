import { combineReducers } from 'redux';
import { daily } from './daily/daily';
import { distance } from './distance/distance';
import { food } from './food/food';
import { location } from './location/location';
import { offset } from './offset/offset';
import { total } from './total/total';
export const rootReducer = combineReducers({
  daily,
  location,
  food,
  distance,
  total,

  offset,
});

export type RootState = ReturnType<typeof rootReducer>;
