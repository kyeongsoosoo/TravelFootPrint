import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import {
  DistanceTotalService,
  FoodTotalService,
} from '../services/CalculService';

function useGetSemi() {
  const foodTotal = useSelector((state: RootState) => state.food);
  const distanceTotal = useSelector((state: RootState) => state.distance);

  const calcedFood = new FoodTotalService(foodTotal).getTotal();
  const calcedDistance = new DistanceTotalService(distanceTotal).getTotal();
  const sum = calcedDistance + calcedFood;
  return sum;
}

export default useGetSemi;
