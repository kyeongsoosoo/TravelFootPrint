import React from 'react';
import { useSelector } from 'react-redux';
import { SelectType } from '../../../../lib/types';
import { RootState } from '../../../../redux';

function useOffsetList() {
  const offsetTotal = useSelector((state: RootState) => state.offset);
  const convertToSelectType = (ItemList: Record<string, SelectType>) => {
    return Object.values(ItemList);
  };
  return {
    offsetTotal: convertToSelectType(offsetTotal),
  };
}

export default useOffsetList;
