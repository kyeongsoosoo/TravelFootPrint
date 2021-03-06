import React from 'react';
import { useSelector } from 'react-redux';
import { useFoodCounter } from '../../../../../../hook/useFoodCounter';
import { ISelectedContainer } from '../../../../../../lib/types';
import { RootState } from '../../../../../../redux';

export function useFMcontent(selectedC: ISelectedContainer) {
  const list = useSelector((state: RootState) => state.food);
  const [setFoodPlus, setFoodMinus] = useFoodCounter(
    selectedC.name,
    selectedC.weight,
  );

  return {
    list,
    setFoodPlus,
    setFoodMinus,
  };
}

export default useFMcontent;
