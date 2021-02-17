import { createReducer } from 'typesafe-actions';
import { LocationType } from '../../lib/types';
import { LocationAction, LOCATION_SEARCH } from './action';

type LocationState = {
  locationData: any;
};

const initialState: LocationState = {
  locationData: null,
};

export const location = createReducer<LocationState, LocationAction>(
  initialState,
  {
    [LOCATION_SEARCH]: (state, action) => ({
      ...state,
      locationData: action.payload,
    }),
  },
);
