import React from 'react';
import LinkBox from '../../Component/LinkBox/LinkBox';
import SearchBox from './component/searchBox/SearchBox';
import S from './Distance.styled';

function Distance() {
  return (
    <S.DistanceWrapper>
      <S.DistanceTitle>주소를 입력하세요.</S.DistanceTitle>
      <SearchBox />
      <LinkBox prevLink="/select/food" nextLink="/select/transport" />
    </S.DistanceWrapper>
  );
}

export default Distance;
