import React from 'react';
import { LocationType } from '../../../../../lib/types';
import S from './SearchBox.styled';
import SearchInput from './SearchInput/SearchInput';

function SearchBox() {
  return (
    <S.SearchBoxWrapper>
      <SearchInput type={LocationType.departure} />
      <SearchInput type={LocationType.arrival} />
    </S.SearchBoxWrapper>
  );
}

export default SearchBox;
