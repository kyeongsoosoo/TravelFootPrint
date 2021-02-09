import React, { useCallback } from 'react';
import S from './FM.styled';
import FoodList from '../../../../../Food.json';
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
