import React, { useCallback } from "react";
import { SelectType } from "../../lib/types";
import { OFFSET_VALUE } from "../../redux/offset/offset";
import S from "./ExplainBox.sylted";

type ExplainBox = {
  ItemList: SelectType[] | OFFSET_VALUE[];
};

function isOffsetItem(item: ExplainBox["ItemList"][0]): item is OFFSET_VALUE {
  return item.hasOwnProperty("unit");
}

function ExplainBox({ ItemList }: ExplainBox) {
  const renderExplainItem = useCallback(
    (item: SelectType | OFFSET_VALUE) => {
      return (
        <S.ExplainItemWrapper key={item.name}>
          {console.log(item)}
          <S.ExpalinItemHeaderBox>
            <S.ExplainItemTitle>
              {item.category !== "배달 음식" ? item.category : item.name}
            </S.ExplainItemTitle>
            <S.ExplainItemValue>
              {"unit" in item ? (item.cost as number) * item.unit : item.cost}g
            </S.ExplainItemValue>
          </S.ExpalinItemHeaderBox>
          {item.description && (
            <S.ExplainItemContent>{item.description}</S.ExplainItemContent>
          )}
        </S.ExplainItemWrapper>
      );
    },
    [ItemList]
  );

  return (
    <S.ExplainBoxWrapper>{ItemList.map(renderExplainItem)}</S.ExplainBoxWrapper>
  );
}

export default ExplainBox;
