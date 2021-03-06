import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinkBox from '../../Component/LinkBox/LinkBox';
import SelectFrame from '../../Component/SelectFrame/SelectFrame';
import { RootState } from '../../redux';
import {
  setLoadingFinish,
  setLoadingStart,
  setSemiTotal,
} from '../../redux/total/action';
import {
  DistanceTotalService,
  FoodTotalService,
} from '../../services/CalculService';
import NaverMapService from '../../services/NaverMapService';
import RdBox from './component/RadioBox/RdBox';
import S from './TransSelect.styled';

function TransSelect() {
  return (
    <SelectFrame title="배달된 방법을 선택해주세요">
      <RdBox />
      <LinkBox prevLink="/select/distance" nextLink="/result/semi" />
    </SelectFrame>
  );
}

export default TransSelect;
