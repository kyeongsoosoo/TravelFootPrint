import React from 'react';
import { useDispatch } from 'react-redux';
import { SelectType } from '../lib/types';
import { setSelection } from '../redux/daily/action';

function useDailySelect() {
  const dispatch = useDispatch();

  const setSelectedItem = (item: SelectType) => {
    if (item.cost !== 0) {
      dispatch(setSelection(item));
    }
  };
  return {
    setSelectedItem,
  };
}

export default useDailySelect;
