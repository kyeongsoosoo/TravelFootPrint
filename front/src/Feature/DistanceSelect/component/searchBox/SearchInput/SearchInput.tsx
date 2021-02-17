import React, { useState } from 'react';
import { LocationType } from '../../../../../lib/types';

import S from './SearchInput.styled';

import { useDispatch, useSelector } from 'react-redux';

import SearchBoxResult from '../SearchResultBox/SearchBoxResult';
import { RootState } from '../../../../../redux';

interface ISearchInput {
  type: LocationType;
}

declare global {
  interface Window {
    kakao;
  }
}

const { kakao } = window;

function SearchInput(props: ISearchInput) {
  const [isOpen, setOpen] = useState(false);
  const [address, setAddr] = useState<string>();
  const [value, setValue] = useState<string>('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEnter = async (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setAddr(value);
      setOpen(!isOpen);
    }
  };

  const placeholderContent =
    props.type == 0 ? '출발지를 입력하세요' : '도착지를 입력하세요';

  return (
    <S.SearchTableWrapper>
      <S.SearchInputWrapper onKeyDown={handleEnter}>
        <>
          <S.SearchInputInp
            placeholder={address || placeholderContent}
            onChange={handleInput}
            value={value}
          ></S.SearchInputInp>
          {isOpen && <SearchBoxResult type={props.type} searchKey={address} />}
        </>
      </S.SearchInputWrapper>
      <S.SearchSubmitBtn />
      {/* 온클릭 구현 */}
    </S.SearchTableWrapper>
  );
}

export default SearchInput;
