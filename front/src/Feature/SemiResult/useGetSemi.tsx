import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectType } from "../../lib/types";

import { RootState } from "../../redux";
import { setSemiTotal } from "../../redux/total/action";
import {
  DailyTotalService,
  DistanceTotalService,
  FoodTotalService,
} from "../../services/CalculService";

function useGetSemi() {
  const dispatch = useDispatch();

  const [delayLoading, setDelay] = useState(true);
  const [sum, setSum] = useState(0);
  const [costList, setList] = useState<SelectType[]>([]);

  const food = useSelector((state: RootState) => state.food);
  const distance = useSelector((state: RootState) => state.distance);
  const daily = useSelector((state: RootState) => state.daily);

  const convertToSelectType = (ItemList: Record<string, SelectType>) => {
    return Object.values(ItemList);
  };

  useEffect(() => {
    if (distance.isDriving && distance.total === "0") {
    } else {
      const calcedFood = new FoodTotalService(food).getTotal();
      const calcedDistance = distance.total
        ? new DistanceTotalService(distance).getTotal()
        : 0;
      const calcedDaily = new DailyTotalService(daily).getTotal();
      const result = calcedDistance + calcedFood + calcedDaily;

      const distanceList: SelectType = {
        name: "자동차 타기",
        cost: calcedDistance,
        category: "자동차 타기",
      };
      const foodList = convertToSelectType(food);
      const dailyList = convertToSelectType(daily);

      const temArr: SelectType[] = [];

      setList(temArr.concat(foodList, dailyList));
      if (calcedDistance > 0) setList(costList.concat(distanceList));

      dispatch(setSemiTotal(result));
      setSum(result);
      setTimeout(() => setDelay(false), 2000);
    }
  }, [distance]);

  return {
    food,
    distance,
    daily: costList,
    isSemiLoading: delayLoading,
    sum,
  };
}

export default useGetSemi;
