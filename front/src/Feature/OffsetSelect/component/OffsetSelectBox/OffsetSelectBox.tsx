import React, { useCallback } from 'react';
import S from './OffsetSelectBox.styled';
import OffsetList from '../../../../Offset.json';
import { IOffset } from '../../../../lib/types';
import { useOffsetCount } from './useOffsetCounter';
import SelectBox from '../../../../Component/SelectBox/SelectBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux';

function OffsetSelectBox() {
  const { offsetCount, setOffsetMinus, setOffsetPlus } = useOffsetCount();

  const renderOffsetItem = useCallback(
    (item: IOffset) => {
      return (
        <S.OffsetItemWrapper key={item.idx}>
          <S.OffsetItemTextWrapper>
            <S.OffsetItemTextTitle>{item.offsetWay}</S.OffsetItemTextTitle>
            <S.OffsetItemTextDescript>
              *{item.detail.assumption}
            </S.OffsetItemTextDescript>
          </S.OffsetItemTextWrapper>
          <SelectBox
            width={30}
            height={70}
            minusClick={() => setOffsetMinus(item)}
            plusClick={() => setOffsetPlus(item)}
            count={
              offsetCount[item.offsetWay]
                ? offsetCount[item.offsetWay].count
                : 0
            }
          />
        </S.OffsetItemWrapper>
      );
    },
    [offsetCount],
  );

  return (
    <S.OffsetSelectBoxWrapper>
      <S.OffsetSelectBox>{OffsetList.map(renderOffsetItem)}</S.OffsetSelectBox>
    </S.OffsetSelectBoxWrapper>
  );
}

export default OffsetSelectBox;
