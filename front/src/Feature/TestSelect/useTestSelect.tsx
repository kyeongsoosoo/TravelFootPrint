import React from 'react';
import { useDispatch } from 'react-redux';
import { SelectType } from '../../lib/types';

function useTestSelect() {
  const dispatch = useDispatch();
  const setTest = (item: SelectType) => {
    console.log('test');
  };
  return { setTest };
}

export default useTestSelect;
