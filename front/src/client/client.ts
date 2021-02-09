import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '../../../naverKey';
import { IDriving } from '../lib/types';

const getGeoCode = async (payload: string) => {
  const response = await axios.get('/api/map/geocoding', {
    params: {
      cord: payload,
    },
  });
  return response.data;
};
const getDriving = async (payload: IDriving) => {
  const response = await axios.get('/api/map/driving', {
    params: {
      start: payload.start,
      goal: payload.goal,
    },
  });
  return response.data;
};

export const mapClient = {
  getGeo: (payload: string) => getGeoCode(payload),
  getDriving: (payload: IDriving) => getDriving(payload),
};
