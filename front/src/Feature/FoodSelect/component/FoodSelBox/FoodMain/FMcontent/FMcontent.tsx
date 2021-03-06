import React from 'react';
import { useSelector } from 'react-redux';
import SelectBox from '../../../../../../Component/SelectBox/SelectBox';
import { useFoodCounter } from '../../../../../../hook/useFoodCounter';

import { ISelectedContainer } from '../../../../../../lib/types';
import { RootState } from '../../../../../../redux';
import S from './FMcontent.styled';
import useFMcontent from './useFMcontent';

export interface IFMcontent {
  selectedC: ISelectedContainer;
}

function FMcontent({ selectedC }: IFMcontent) {
  const { list, setFoodPlus, setFoodMinus } = useFMcontent(selectedC);

  return (
    <S.FMcontentWrapper>
      <S.FMcontentPhoto>{selectedC.name}</S.FMcontentPhoto>
      <SelectBox
        width={100}
        height={50}
        minusClick={setFoodMinus}
        plusClick={setFoodPlus}
        count={list[selectedC.name] ? list[selectedC.name].count : 0}
      />
    </S.FMcontentWrapper>
  );
}

export default React.memo(FMcontent);
