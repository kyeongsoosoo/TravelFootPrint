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
  const offsetList = useSelector((state: RootState) => state.offset);

  const dispatch = useDispatch();

  const hnadleToFinalClick = async () => {
    const OffsetTotal = new OffsetTotalService(offsetList).getTotal();
    dispatch(setLoadingStart());
    setTimeout(() => {
      dispatch(setFinalTotal(OffsetTotal));
      dispatch(setLoadingFinish());
      console.log('done');
    }, 2000);
  };

  return (
    <SelectFrame title="지금 당장 내가 할 수 있는 일은?">
      <OffsetSelectBox />
      <LinkBox
        prevLink="/result/semi"
        nextLink="/result/final"
        nextClick={hnadleToFinalClick}
      />
    </SelectFrame>
  );
}

export default OffsetSelect;
