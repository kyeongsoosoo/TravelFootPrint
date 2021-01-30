import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minusCount, plusCount } from '../../../../../redux/food/action';
import S from './FM.styled';
import FoodList from '../../../Food.json';
import { useSavingCounter } from '../../../../../hook/useSavingCounter';
import { RootState } from '../../../../../redux';
import FMcontent from './FMcontent/FMcontent';
import { ISelectedContainer } from '../../../../../lib/types';

interface IFM {
  selectedIdx: number;
}

function FM({ selectedIdx }: IFM) {
  const selectedContainer = FoodList[selectedIdx].container;

  const renderContent = useCallback((item: ISelectedContainer, idx) => {
    return <FMcontent key={idx} selectedC={item} />;
  }, []);

  return (
    <>
      <S.FMWrapper>{selectedContainer.map(renderContent)}</S.FMWrapper>
    </>
  );
}

export default React.memo(FM);
