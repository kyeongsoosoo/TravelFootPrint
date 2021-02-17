import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mapClient } from '../../../../client/client';
import Button from '../../../../Component/Button/Button';
import { RootState } from '../../../../redux';
import { totalDistance } from '../../../../redux/distance/action';
import NaverMapService from '../../../../services/NaverMapService';
import S from './SubmitBtn.styled';

function SubmitBtn() {
  const departureCord = useSelector(
    (state: RootState) => state.distance.departure,
  );
  const arrivalCord = useSelector((state: RootState) => state.distance.arrival);

  const dispatch = useDispatch();

  const handleCordSubmit = async () => {
    if (!departureCord || !arrivalCord) return;
    const naviInfo = NaverMapService.getNavi(departureCord, arrivalCord);
    const distance = NaverMapService.getDistance(naviInfo);

    dispatch(totalDistance(distance));

    // if (!departueCord || !arrivalCord) return;
    // const ex = await mapClient.getDriving({
    //   start: [departueCord?.x, departueCord?.y],
    //   goal: [arrivalCord?.x, arrivalCord?.y],
    // });
    // const distance = ex.route.traoptimal[0].summary.distance;
    // const duration = ex.route.traoptimal[0].summary.duration;
  };

  return (
    <S.SubmitBtnWrapper>
      {departureCord && arrivalCord && (
        <Button width={100} height={100} onClick={handleCordSubmit}>
          Submit
        </Button>
      )}
    </S.SubmitBtnWrapper>
  );
}

export default SubmitBtn;
