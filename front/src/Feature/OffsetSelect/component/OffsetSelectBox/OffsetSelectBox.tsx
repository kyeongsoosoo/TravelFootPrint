import React, { useCallback } from 'react';
import S from './OffsetSelectBox.styled';
import { IOffset, OffsetSelectType } from '../../../../lib/types';
import { useOffsetCount } from './useOffsetCounter';
import CounterBox from '../../../../Component/CounterBox/CounterBox';
import { OffsetType } from '../../../../Constant/OffsetType';

function OffsetSelectBox() {
  const { OffsetList, setOffsetMinus, setOffsetPlus, OffsetQuestion } = useOffsetCount();

  const renderOffsetItem = useCallback(
    (item: OffsetSelectType) => {
      return (
        <S.OffsetItemWrapper key={item.name}>
          <S.OffsetItemTextWrapper>
            <S.OffsetItemTextTitle>{item.name}</S.OffsetItemTextTitle>
            <S.OffsetItemTextDescript>
              *{item.unitDescription}
            </S.OffsetItemTextDescript>
          </S.OffsetItemTextWrapper>
          <CounterBox
            minusClick={() => setOffsetMinus(item)}
            plusClick={() => setOffsetPlus(item)}
            count={OffsetList[item.name] ? OffsetList[item.name].count : 0}
          />
        </S.OffsetItemWrapper>
      );
    },
    [OffsetList],
  );

  return (
    <S.OffsetSelectBox>{OffsetQuestion.map(renderOffsetItem)}</S.OffsetSelectBox>
  );
}

export default OffsetSelectBox;
