import React, { useCallback, useState } from 'react';
import { SelectType } from '../lib/types';

function useSingleSelect(choice: SelectType) {
  const [selectedItem, setSelected] = useState<string>();

  return {
    selectedItem,
    setSelected,
  };
}

export default useSingleSelect;
