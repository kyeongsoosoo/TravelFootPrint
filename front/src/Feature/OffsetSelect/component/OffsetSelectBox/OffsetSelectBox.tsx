import React, { useCallback } from 'react';
import S from './OffsetSelectBox.styled';
import OffsetList from '../../../../Offset.json';
import { IOffset } from '../../../../lib/types';
import { useOffsetCount } from '../../../../hook/useOffsetCounter';
import SelectBox from '../../../../Component/SelectBox/SelectBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux';

function OffsetSelectBox() {
  const [setOffsetPlus, setOffsetMinus] = useOffsetCount();

  const offsetCount = useSelector((state: RootState) => state.offset);

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
      {console.log(OffsetList)}
      <S.OffsetSelectBox>{OffsetList.map(renderOffsetItem)}</S.OffsetSelectBox>
    </S.OffsetSelectBoxWrapper>
  );
}

export default OffsetSelectBox;
