import React from 'react';
import { useDispatch } from 'react-redux';
import { SelectType } from '../../../lib/types';
import { setSelection } from '../../../redux/daily/action';

function useTestSelect() {
  const dispatch = useDispatch();
  const setTest = (item: SelectType) => {
    dispatch(setSelection(item));
  };
  return { setTest };
}

export default useTestSelect;
