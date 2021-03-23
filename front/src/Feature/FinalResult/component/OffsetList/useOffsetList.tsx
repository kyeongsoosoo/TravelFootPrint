import React from 'react';
import { useSelector } from 'react-redux';
import { SelectType } from '../../../../lib/types';
import { RootState } from '../../../../redux';
import { OFFSET_VALUE } from '../../../../redux/offset/offset';

function useOffsetList() {
  const offsetTotal = useSelector((state: RootState) => state.offset);
  const convertToOffsetValue = (ItemList: Record<string, OFFSET_VALUE>) => {
    return Object.values(ItemList);
  };
  return {
    offsetTotal: convertToOffsetValue(offsetTotal),
  };
}

export default useOffsetList;
