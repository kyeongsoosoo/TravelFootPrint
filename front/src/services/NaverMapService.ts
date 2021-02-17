import { mapClient } from '../client/client';
import { ICord } from '../lib/types';

class NaverMapService {
  async getNavi(departureCord: ICord, arrivalCord: ICord) {
    const naviInfo = await mapClient.getDriving({
      start: [departureCord.x, departureCord.y],
      goal: [arrivalCord.x, arrivalCord.y],
    });
    return naviInfo.route.traoptimal[0].summary;
  }

  getDistance(info) {
    return info.distance;
  }

  getDuration(info) {
    return info.duration;
  }
}

export default new NaverMapService();
