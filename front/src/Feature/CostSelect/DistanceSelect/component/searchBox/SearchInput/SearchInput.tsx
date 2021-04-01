import React, { useState } from "react";
import { LocationType } from "../../../../../../lib/types";

import S from "./SearchInput.styled";

import SearchBoxResult from "../SearchResultBox/SearchBoxResult";

interface ISearchInput {
  type: LocationType;
}

function SearchInput(props: ISearchInput) {
  const [isOpen, setOpen] = useState(false);
  const [address, setAddr] = useState<string>();
  const [value, setValue] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      toggleInput();
    }
  };

  const handleSearchClick = () => {
    toggleInput();
  };

  function toggleInput() {
    setAddr(value);
    setOpen(!isOpen);
  }

  const placeholderContent =
    props.type == 0 ? "출발지를 입력하세요" : "도착지를 입력하세요";

  return (
    <S.SearchTableWrapper>
      <S.SearchInputWrapper>
        <>
          <S.SearchInputInp
            onKeyDown={handleEnter}
            placeholder={address || placeholderContent}
            onChange={handleInput}
            onClick={() => {
              setValue("");
              setAddr("");
            }}
            value={value}
          ></S.SearchInputInp>
          <S.SearchSubmitBtn onClick={handleSearchClick} />
        </>
      </S.SearchInputWrapper>
      {isOpen && (
        <SearchBoxResult
          type={props.type}
          searchKey={address}
          setInput={(val) => {
            setOpen(!open);
            setValue(val);
          }}
        />
      )}
    </S.SearchTableWrapper>
  );
}

export default SearchInput;
