import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

function useOffsetItem() {
  const OffsetItems = useSelector((state: RootState) => state.offset);

  const sortedItems = Object.entries(OffsetItems).map(([key, value]) => {
    return {
      key,
      count: value.count,
      weight: value.weight,
      description: value.description,
    };
  });

  return sortedItems;
}

export default useOffsetItem;
