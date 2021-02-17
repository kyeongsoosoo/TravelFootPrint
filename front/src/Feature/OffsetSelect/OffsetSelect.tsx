import React from 'react';
import LinkBox from '../../Component/LinkBox/LinkBox';
import SelectFrame from '../../Component/SelectFrame/SelectFrame';
import OffsetSelectBox from './component/OffsetSelectBox/OffsetSelectBox';

function OffsetSelect() {
  return (
    <SelectFrame title="지금 당장 내가 할 수 있는 일은?">
      <OffsetSelectBox />
      <LinkBox prevLink="/result/semi" nextLink="/result/final" />
    </SelectFrame>
  );
}

export default OffsetSelect;
