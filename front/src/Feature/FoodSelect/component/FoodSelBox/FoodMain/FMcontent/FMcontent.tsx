import React from 'react';
import { useSelector } from 'react-redux';
import { useSavingCounter } from '../../../../../../hook/useSavingCounter';
import { ISelectedContainer } from '../../../../../../lib/types';
import { RootState } from '../../../../../../redux';
import S from './FMcontent.styled';

interface IFMcontent {
  selectedC: ISelectedContainer;
}

function FMcontent({ selectedC }: IFMcontent) {
  const list = useSelector((state: RootState) => state.food);
  const [getPlus, getMinus] = useSavingCounter(
    selectedC.name,
    selectedC.weight,
  );

  return (
    <S.FMcontentWrapper>
      <S.FMcontentPhoto>{selectedC.name}</S.FMcontentPhoto>
      <S.FMcontentCalWrapper>
        <S.FMcontentBtn onClick={getMinus}>-</S.FMcontentBtn>
        <S.FMcontentCalShowWrapper>
          {list[selectedC.name] ? list[selectedC.name].count : 0}
        </S.FMcontentCalShowWrapper>
        <S.FMcontentBtn onClick={getPlus}>+</S.FMcontentBtn>
      </S.FMcontentCalWrapper>
    </S.FMcontentWrapper>
  );
}

export default React.memo(FMcontent);
