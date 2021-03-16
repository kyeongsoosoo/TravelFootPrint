import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { IDriving } from '../lib/types';
import { RootState } from '../redux';
import { totalDistance } from '../redux/distance/action';
import NaverMapService from '../services/NaverMapService';

export function useGetDistance() {
  const payload = useSelector((state: RootState) => state.distance);

  const dispatch = useDispatch();

  const [delayLoading, setDelay] = useState(false);

  const fetchMapApi = async () => {
    if (payload.isDriving === false) {
      dispatch(totalDistance('0'));
      return '0';
    }
    if (payload.departure === null) return;
    if (payload.arrival === null) return;
    const sum = await NaverMapService.getNavi(
      payload.departure,
      payload.arrival,
    );
    dispatch(totalDistance(sum.distance));
    setTimeout(() => {
      setDelay(true);
    }, 2000);
    return sum;
  };

  const { data, error, isValidating } = useSWR('getDistance', fetchMapApi, {
    revalidateOnFocus: false,
  });

  return {
    data,
    error,
    isLoading: isValidating && delayLoading,
  };
}

export default useGetDistance;
