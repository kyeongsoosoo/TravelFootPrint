import React from 'react';

import LinkBox from '../../Component/LinkBox/LinkBox';
import SelectFrame from '../../Component/SelectFrame/SelectFrame';

import RdBox from './component/RadioBox/RdBox';

function TransSelect() {
  return (
    <SelectFrame title="배달된 방법을 선택해주세요">
      <RdBox />
      <LinkBox prevLink="/select/distance" nextLink="/result/semi" />
    </SelectFrame>
  );
}

export default TransSelect;
