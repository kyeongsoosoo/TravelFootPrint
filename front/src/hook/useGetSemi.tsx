import React from 'react';
import { useSelector } from 'react-redux';
import { SelectType } from '../lib/types';

import { RootState } from '../redux';
import {
  DailyTotalService,
  DistanceTotalService,
  FoodTotalService,
} from '../services/CalculService';

function useGetSemi() {
  const food = useSelector((state: RootState) => state.food);
  const distance = useSelector((state: RootState) => state.distance);
  const daily = useSelector((state: RootState) => state.daily);

  const convertToSelectType = (ItemList: Record<string, SelectType>) => {
    return Object.values(ItemList);
  };

  const calcedFood = new FoodTotalService(food).getTotal();
  const calcedDistance = distance.total
    ? new DistanceTotalService(distance).getTotal()
    : 0;
  const calcedDaily = new DailyTotalService(daily).getTotal();
  const sum = calcedDistance + calcedFood + calcedDaily;
  return {
    food,
    distance,
    daily: convertToSelectType(daily),
    sum,
  };
}

export default useGetSemi;
