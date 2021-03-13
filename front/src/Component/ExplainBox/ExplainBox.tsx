import React, { useCallback } from 'react';
import { SelectType } from '../../lib/types';
import S from './ExplainBox.sylted';
import useExplainBox from './useExplainBox';

type ExplainBox = {
  ItemList: SelectType[];
};

function ExplainBox({ ItemList }: ExplainBox) {
  const renderExplainItem = useCallback(
    (item: SelectType) => {
      return (
        <S.ExplainItemWrapper key={item.name}>
          {console.log(item)}
          <S.ExpalinItemHeaderBox>
            <S.ExplainItemTitle>{item.category}</S.ExplainItemTitle>
            <S.ExplainItemValue>{item.cost}g</S.ExplainItemValue>
          </S.ExpalinItemHeaderBox>
          {item.description && (
            <S.ExplainItemContent>{item.cost}</S.ExplainItemContent>
          )}
        </S.ExplainItemWrapper>
      );
    },
    [ItemList],
  );

  return (
    <S.ExplainBoxWrapper>{ItemList.map(renderExplainItem)}</S.ExplainBoxWrapper>
  );
}

export default ExplainBox;
