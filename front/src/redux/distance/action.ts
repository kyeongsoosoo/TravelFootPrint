import { ActionType, createAction } from 'typesafe-actions';
import { ICord, SelectType, TtransportType } from '../../lib/types';

export const DISTANCE_ISDRIVING = 'distance/isDriving';

export const DISTANCE_DEPARTURE = 'distance/departureCord';

export const DISTANCE_ARRIVE = 'distance/arriveCord';

export const DISTANCE_TOTAL = 'distance/total';

export const DISTANCE_TRANSPORT = 'distance/transport';

export const DISTANCE_RESET = 'distance/reset';

export const setIsDriving = createAction(DISTANCE_ISDRIVING)<SelectType>();

export const departureCord = createAction(DISTANCE_DEPARTURE)<ICord>();

export const arriveCord = createAction(DISTANCE_ARRIVE)<ICord>();

export const totalDistance = createAction(DISTANCE_TOTAL)<string>();

export const transportType = createAction(DISTANCE_TRANSPORT)<TtransportType>();

export const resetDistance = createAction(DISTANCE_RESET)<undefined>();

const actions = {
  setIsDriving,
  departureCord,
  arriveCord,
  totalDistance,
  transportType,
  resetDistance,
};

export type DISTANCE_ACTION = ActionType<typeof actions>;
