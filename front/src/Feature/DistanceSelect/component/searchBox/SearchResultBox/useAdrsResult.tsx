import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { RootState } from '../../../../../redux';
import { getLoacaData } from '../../../../../redux/location/action';
import { PlaceService } from '../../../../../services/SearchService';

export function useAdrsResult(searchKey = '안암') {
  const PS = PlaceService();

  const SearchedList = useSelector(
    (state: RootState) => state.location.locationData,
  );

  const dispatch = useDispatch();

  const { data, mutate } = useSWR('address/result', async () => {
    await PS.keywordSearch(searchKey, (data: unknown) => {
      dispatch(getLoacaData(data));
    });
  });

  return {
    SearchedList,
    isLoading: !data,
    handleUpdate: mutate,
  };
}
