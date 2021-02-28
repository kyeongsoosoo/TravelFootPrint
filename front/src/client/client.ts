import axios from 'axios';
import { IDriving } from '../lib/types';

const getGeoCode = async (payload: string) => {
  const response = await axios.get(
    'http://travelprint.ap-northeast-2.elasticbeanstalk.com/api/map/geocoding',
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
    'http://travelprint.ap-northeast-2.elasticbeanstalk.com/api/map/driving',
    {
      params: {
        start: `${payload.start.x},${payload.start.y}`,
        goal: `${payload.goal.x},${payload.goal.y}`,
      },
    },
  );
  return response.data;
};

export const mapClient = {
  getGeo: (payload: string) => getGeoCode(payload),
  getDriving: (payload: IDriving) => getDriving(payload),
};
