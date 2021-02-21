import React from 'react';
import { useSelector } from 'react-redux';
import SelectBox from '../../../../../../Component/SelectBox/SelectBox';
import { useFoodCounter } from '../../../../../../hook/useFoodCounter';

import { ISelectedContainer } from '../../../../../../lib/types';
import { RootState } from '../../../../../../redux';
import S from './FMcontent.styled';

interface IFMcontent {
  selectedC: ISelectedContainer;
}

function FMcontent({ selectedC }: IFMcontent) {
  const list = useSelector((state: RootState) => state.food);
  const [setFoodPlus, setFoodMinus] = useFoodCounter(
    selectedC.name,
    selectedC.weight,
  );

  return (
    <S.FMcontentWrapper>
      <S.FMcontentPhoto>{selectedC.name}</S.FMcontentPhoto>
      <SelectBox
        width={100}
        minusClick={setFoodMinus}
        plusClick={setFoodPlus}
        count={list[selectedC.name] ? list[selectedC.name].count : 0}
      />
    </S.FMcontentWrapper>
  );
}

export default React.memo(FMcontent);
