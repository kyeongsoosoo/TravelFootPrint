import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { RootState } from '../../redux';
import { setFinalTotal, setTravelTotal } from '../../redux/total/action';
import { OffsetTotalService } from '../../services/CalculService';

export function useGetFinal() {
  const [isFinished, setFinished] = useState(false);

  const offsetList = useSelector((state: RootState) => state.offset);

  const costTotal = useSelector((state: RootState) => state.total.semi);
  const finalTotal = useSelector((state: RootState) => state.total.final);
  const travelTotal = useSelector((state: RootState) => state.total.travel);

  const dispatch = useDispatch();

  useEffect(() => {
    const OffsetTotal = new OffsetTotalService(offsetList).getTotal();
    dispatch(setFinalTotal(OffsetTotal));
    setTimeout(() => {
      setFinished(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!finalTotal) return;
    const travelTotal = finalTotal - costTotal;
    dispatch(setTravelTotal(travelTotal));
  }, [finalTotal]);

  return {
    isFinished,
    costTotal,
    finalTotal,
    travelTotal,
  };
}
