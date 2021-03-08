import React, { useCallback } from 'react';
import S from './ExplainBox.sylted';
import useExplainBox from './useExplainBox';

function ExplainBox() {
  const offsetItemSets = useExplainBox();

  const renderExplainItem = useCallback(
    (name, property) => {
      return (
        <S.ExplainItemWrapper key={name}>
          {console.log(offsetItemSets)}
          <S.ExplainItemTitle>{name}</S.ExplainItemTitle>
          <S.ExplainItemContent>{property.description}</S.ExplainItemContent>
        </S.ExplainItemWrapper>
      );
    },
    [offsetItemSets],
  );

  return (
    <S.ExplainBoxWrapper>
      {offsetItemSets.map(([name, property]) =>
        renderExplainItem(name, property),
      )}
    </S.ExplainBoxWrapper>
  );
}

export default ExplainBox;
