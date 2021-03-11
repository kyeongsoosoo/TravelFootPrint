import React, { useCallback, useState } from 'react';
import { SelectType } from '../lib/types';

function useSingleSelect(choice: SelectType) {
  const [selectedItem, setSelected] = useState<string>(choice.name);

  return {
    selectedItem,
    setSelected,
  };
}

export default useSingleSelect;
