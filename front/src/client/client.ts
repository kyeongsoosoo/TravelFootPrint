import axios from 'axios';
import { IDriving } from '../lib/types';

const getFakeReq = () => {
  const response = axios.get('https://carb-miniserver.herokuapp.com/');
  console.log('hi');
};

const getGeoCode = async (payload: string) => {
  const response = await axios.get(
    'https://carb-miniserver.herokuapp.com/api/map/geocoding',
    {
      params: {
        cord: payload,
      },
    },
  );
  return response.data;
};
const getDriving = async (payload: IDriving) => {
  const response = await axios.get(
    'https://carb-miniserver.herokuapp.com/api/map/driving',
    {
      params: {
        start: `${payload.start.x},${payload.start.y}`,
        goal: `${payload.goal.x},${payload.goal.y}`,
      },
    },
  );
  return response.data;
};

export const fakeClient = {
  getFakeReq: () => getFakeReq(),
};

export const mapClient = {
  getGeo: (payload: string) => getGeoCode(payload),
  getDriving: (payload: IDriving) => getDriving(payload),
};
