import React, { useCallback } from 'react';
import { LocationType } from '../../../../../../lib/types';

import S from './SearchResultBox.styled';
import { useAdrsResult } from './useAdrsResult';

export type TSearchBoxResult = {
  searchKey: string | undefined;
  type: LocationType;
  setInput: (val) => void;
};

function SearchBoxResult(props: TSearchBoxResult) {
  const {
    SearchedList,
    isLoading,
    handleUpdate,
    handleItemClick,
  } = useAdrsResult(props);

  const renderSearchedList = useCallback(
    item => {
      const handleListClick = () => {
        handleItemClick(item);
      };

      return (
        <S.SearchResultItemWrapper key={item.id} onClick={handleListClick}>
          <S.SRItextBox>
            <S.SRItextPlaceName
              overSize={item.place_name.length > 10 ? true : false}
            >
              {item.place_name}
            </S.SRItextPlaceName>
            <S.SRItextAddressName>{item.address_name}</S.SRItextAddressName>
          </S.SRItextBox>
        </S.SearchResultItemWrapper>
      );
    },
    [SearchedList],
  );

  return (
    <S.SearchResultBoxWrapper>
      {SearchedList ? SearchedList.map(renderSearchedList) : <div>Hi</div>}
    </S.SearchResultBoxWrapper>
  );
}

export default SearchBoxResult;
