import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinkBox from '../../Component/LinkBox/LinkBox';
import { getTotal } from '../../lib/utils';
import { RootState } from '../../redux';
import {
  setLoadingFinish,
  setLoadingStart,
  setSemiTotal,
} from '../../redux/total/action';
import RdBox from './component/RadioBox/RdBox';
import S from './TransSelect.styled';

function TransSelect() {
  const foodList = useSelector((state: RootState) => state.food);
  const distanceList = useSelector((state: RootState) => state.distance);

  const dispatch = useDispatch();

  const handleToSemiClick = async () => {
    const total = await getTotal(foodList, distanceList);
    dispatch(setLoadingStart());
    setTimeout(() => {
      dispatch(setSemiTotal(total));
      dispatch(setLoadingFinish());
      console.log('done');
    }, 2000);
  };

  return (
    <S.TransSelectWrapper>
      <S.TransSelectTitle>배달된 방법을 골라주세요</S.TransSelectTitle>
      <RdBox />
      <LinkBox
        prevLink="/select/distance"
        nextLink="/result/semi"
        nextClick={handleToSemiClick}
      />
    </S.TransSelectWrapper>
  );
}

export default TransSelect;
