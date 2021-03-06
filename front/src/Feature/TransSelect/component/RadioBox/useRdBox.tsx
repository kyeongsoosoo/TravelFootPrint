import React from 'react';
import { useDispatch } from 'react-redux';
import { TtransportType } from '../../../../lib/types';
import { transportType } from '../../../../redux/distance/action';

export function useRdBox() {
  const dispatch = useDispatch();

  const setTransportType = (selectdInp: TtransportType) => {
    dispatch(transportType(selectdInp));
  };

  return {
    setTransportType,
  };
}

export default useRdBox;
