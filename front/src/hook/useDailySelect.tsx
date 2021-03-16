import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelection } from '../redux/daily/action';

function useDailySelect() {
  const dispatch = useDispatch();

  const setSelectedItem = item => {
    dispatch(setSelection(item));
  };
  return {
    setSelectedItem,
  };
}

export default useDailySelect;
