import { DISTANCE_STATE } from '../redux/distance/distance';
import { FOOD_STATE } from '../redux/food/food';
import { OFFSET_STATE } from '../redux/offset/offset';

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

export class OffsetTotalService implements ITotalProp {
  constructor(private offsetList: OFFSET_STATE) {}

  getTotal() {
    const FoodEntry = getListEntry(this.offsetList);
    return getListTotal(FoodEntry);
  }
}

export class FoodTotalService implements ITotalProp {
  constructor(private foodList: FOOD_STATE) {}

  getTotal() {
    const FoodEntry = getListEntry(this.foodList);
    return getListTotal(FoodEntry);
  }
}

export class DistanceTotalService implements ITotalProp {
  constructor(private distanceList: DISTANCE_STATE) {}

  getTotal() {
    return getDistanceTotal(this.distanceList);
  }
}

function getListEntry(foodList: FOOD_STATE) {
  return Object.entries(foodList);
}

function getListTotal(foodList: FoodEntry) {
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
