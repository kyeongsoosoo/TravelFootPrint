import React, { useState } from 'react';
import { LocationType } from '../../../../../lib/types';
import Post from '../../../Post';
import S from './SearchInput.styled';

interface ISearchInput {
  type: LocationType;
}

function SearchInput(props: ISearchInput) {
  const [isOpen, setOpen] = useState(false);
  const [address, setAddr] = useState('');

  const handleInput = item => {
    setOpen(open => !open);
    setAddr(item);
  };

  const placeholderContent =
    props.type == 0 ? '출발지를 입력하세요' : '도착지를 입력하세요';

  return (
    <S.SearchInputWrapper>
      {!isOpen && !address && (
        <S.SearchInputInp
          placeholder={placeholderContent}
          onClick={() => {
            setOpen(open => !open);
          }}
        ></S.SearchInputInp>
      )}
      {!isOpen && address && (
        <S.SearchInputResult
          onClick={() => {
            setOpen(open => !open);
          }}
        >
          {address}
        </S.SearchInputResult>
      )}
      {isOpen && (
        <S.SearchInputDaumBox>
          <Post handleInput={handleInput} type={props.type} />
        </S.SearchInputDaumBox>
      )}
    </S.SearchInputWrapper>
  );
}

export default SearchInput;
