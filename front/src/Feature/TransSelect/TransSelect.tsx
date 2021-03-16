import React from 'react';

import NavBox from '../../Component/NavBox/NavBox';
import SelectFrame from '../../Component/SelectFrame/SelectFrame';

import RdBox from '../../Component/RadioBox/RadioBox';

function TransSelect() {
  return (
    <SelectFrame title="배달된 방법을 선택해주세요">
      <RdBox />
      <NavBox prevLink="/select/distance" nextLink="/result/semi" />
    </SelectFrame>
  );
}

export default TransSelect;
