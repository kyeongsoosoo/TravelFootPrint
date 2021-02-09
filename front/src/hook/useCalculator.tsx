import { useDispatch, useSelector } from 'react-redux';
import { mapClient } from '../client/client';
import { FOOD_STATE } from '../redux/food/food';
import { DISTANCE_STATE } from '../redux/distance/distance';

export async function getTotal(
  foodList: FOOD_STATE,
  distanceList: DISTANCE_STATE,
) {
  const foodTotal = Object.entries(foodList).reduce((acc, cur) => {
    console.log(cur);
    return (acc += cur[1].count * cur[1].weight);
  }, 0);

  const getDistanceTotal = async () => {
    if (!distanceList.departure || !distanceList.arrival) return 0;
    const cordSet = {
      start: `${distanceList.departure.x},${distanceList.departure.y}`,
      goal: `${distanceList.arrival.x},${distanceList.arrival.y}`,
    };
    try {
      const distanceInfo = await mapClient.getDriving(cordSet);
      return (distanceInfo.route.traoptimal[0].summary.distance * 145) / 1000;
    } catch (e) {
      return 0;
    }
  };
  const distanceTotal = await getDistanceTotal();
  return foodTotal + distanceTotal;
}
