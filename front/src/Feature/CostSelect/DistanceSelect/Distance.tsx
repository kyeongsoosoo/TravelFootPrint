import React from 'react';

import NavBox from '../../../Component/NavBox/NavBox';
import SelectFrame from '../../../Component/SelectFrame/SelectFrame';
import { PaginationInfo } from '../../../Constant/Page';

import SearchBox from './component/searchBox/SearchBox';
import S from './Distance.styled';

function Distance() {
  return (
    <SelectFrame title="주소를 입력하세요" pageNum={PaginationInfo.Driving}>
      <SearchBox />
      <NavBox prevLink="/select/isDriving" nextLink="/result/semi" />
    </SelectFrame>
  );
}

export default Distance;
