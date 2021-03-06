import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { RootState } from '../redux';
import { OffsetTotalService } from '../services/CalculService';

export function useGetFinal() {
  const offsetList = useSelector((state: RootState) => state.offset);

  const dispatch = useDispatch();

  const { data } = useSWR('getFinal', () => {
    setTimeout(() => {
      const OffsetTotal = new OffsetTotalService(offsetList).getTotal();
      console.log(OffsetTotal);
      return OffsetTotal;
    }, 2000);
  });

  return {
    isLoading: !data,
    total: data,
  };
}
