import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux';

function useExplainBox() {
  const offsetItems = useSelector((state: RootState) => state.offset);
  const offsetItemSets = Object.entries(offsetItems);

  return offsetItemSets;
}

export default useExplainBox;
