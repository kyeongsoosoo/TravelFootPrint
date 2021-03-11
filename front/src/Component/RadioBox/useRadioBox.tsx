import React from 'react';
import { useDispatch } from 'react-redux';
import { TtransportType } from '../../lib/types';
import { transportType } from '../../redux/distance/action';

export function useRadioBox() {
  const dispatch = useDispatch();

  const setTransportType = (selectdInp: TtransportType) => {
    dispatch(transportType(selectdInp));
  };

  return {
    setTransportType,
  };
}

export default useRadioBox;

//있어야하는 것
//디스패치 기능.
//다중선택 또는 단일선택
//클릭 기능과 디스패치 기능 분리??
