import { DISTANCE_STATE } from '../redux/distance/distance';
import { FOOD_STATE } from '../redux/food/food';

type FoodEntry = [
  string,
  {
    count: number;
    weight: number;
  },
][];

interface ITotalProp {
  getTotal: () => number;
}

export class FoodTotalService implements ITotalProp {
  constructor(private foodList: FOOD_STATE) {}

  getTotal() {
    const FoodEntry = getFoodEntry(this.foodList);
    return getFoodTotal(FoodEntry);
  }
}

export class DistanceTotalService implements ITotalProp {
  constructor(private distanceList: DISTANCE_STATE) {}

  getTotal() {
    return getDistanceTotal(this.distanceList);
  }
}

function getFoodEntry(foodList: FOOD_STATE) {
  return Object.entries(foodList);
}

function getFoodTotal(foodList: FoodEntry) {
  const totalResult = foodList.reduce((acc, cur) => {
    return (acc += cur[1].count * cur[1].weight);
  }, 0);
  return totalResult;
}

function getDistanceTotal(distanceList: DISTANCE_STATE) {
  if (distanceList.transport == 'walk/Bike') return 0;
  if (distanceList.total == null) return 0;
  return (parseInt(distanceList.total) * 145) / 100;
}
