import React from 'react';
import MapContainer from '../../../Component/KaKaoMap/MapContainer';

import NavBox from '../../../Component/NavBox/NavBox';
import SelectFrame from '../../../Component/SelectFrame/SelectFrame';
import { PageInfo } from '../../../Constant/Page';
import SearchBox from './component/searchBox/SearchBox';
import S from './Distance.styled';

function Distance() {
  return (
    <SelectFrame title="주소를 입력하세요" pageNum={PageInfo.Driving}>
      <SearchBox />
      <NavBox prevLink="/select/food" nextLink="/select/transport" />
    </SelectFrame>
  );
}

export default Distance;
