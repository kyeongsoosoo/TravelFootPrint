import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinkBox from '../../Component/LinkBox/LinkBox';
import SelectFrame from '../../Component/SelectFrame/SelectFrame';
import { RootState } from '../../redux';
import {
  setFinalTotal,
  setLoadingFinish,
  setLoadingStart,
} from '../../redux/total/action';
import { total } from '../../redux/total/total';
import { OffsetTotalService } from '../../services/CalculService';
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
