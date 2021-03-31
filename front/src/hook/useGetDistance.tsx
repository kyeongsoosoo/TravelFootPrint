import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import { IDriving } from "../lib/types";
import { RootState } from "../redux";
import { totalDistance } from "../redux/distance/action";
import NaverMapService from "../services/NaverMapService";

export function useGetDistance() {
  const payload = useSelector((state: RootState) => state.distance);

  const dispatch = useDispatch();

  const [delayLoading, setDelay] = useState(true);

  const fetchMapApi = async () => {
    if (payload.isDriving === false) {
      setDelay(false);
      dispatch(totalDistance("0"));
      return "0";
    }
    if (payload.departure === null || payload.arrival === null) {
      setDelay(false);
      return;
    }

    const sum = await NaverMapService.getNavi(
      payload.departure,
      payload.arrival
    );
    dispatch(totalDistance(sum.distance));
    setDelay(false);
    return sum;
  };

  const { data, error } = useSWR("getDistance", fetchMapApi, {
    revalidateOnFocus: false,
  });

  return {
    data,
    error,
    isLoading: delayLoading,
  };
}

export default useGetDistance;
