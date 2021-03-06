import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { IDriving } from '../lib/types';
import { RootState } from '../redux';
import { totalDistance } from '../redux/distance/action';
import NaverMapService from '../services/NaverMapService';

export function useGetDistance() {
  const payload = useSelector((state: RootState) => state.distance);

  const dispatch = useDispatch();

  const { data } = useSWR('getDistance', async () => {
    if (payload.departure === null) return;
    if (payload.arrival === null) return;
    const sum = await NaverMapService.getNavi(
      payload.departure,
      payload.arrival,
    );
    dispatch(totalDistance(sum.distance));
    return sum;
  });

  return {
    distance: data,
    isLoading: !data,
  };
}

export default useGetDistance;
