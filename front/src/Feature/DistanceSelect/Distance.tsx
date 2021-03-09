import React from 'react';
import MapContainer from '../../Component/KaKaoMap/MapContainer';
import SearchPlace from '../../Component/KaKaoMap/SearchPlace';
import NavBox from '../../Component/NavBox/NavBox';
import SelectFrame from '../../Component/SelectFrame/SelectFrame';
import SearchBox from './component/searchBox/SearchBox';
import S from './Distance.styled';

function Distance() {
  return (
    <SelectFrame title="주소를 입력하세요">
      <SearchBox />
      <NavBox prevLink="/select/food" nextLink="/select/transport" />
    </SelectFrame>
  );
}

export default Distance;
