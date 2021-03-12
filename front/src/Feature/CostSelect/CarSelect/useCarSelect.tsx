import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectType } from '../../../lib/types';
import { RootState } from '../../../redux';
import { setIsDriving } from '../../../redux/distance/action';

function useCarSelect() {
  const isDriving = useSelector((state: RootState) => state.distance.isDriving);

  const dispatch = useDispatch();

  const checkIsDriving = (item: SelectType) => {
    dispatch(setIsDriving(item));
  };

  return { checkIsDriving, isDriving };
}

export default useCarSelect;
