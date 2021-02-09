import React from 'react';
import { useSelector } from 'react-redux';
import { mapClient } from '../../../../client/client';
import Button from '../../../../Component/Button/Button';
import { RootState } from '../../../../redux';
import S from './SubmitBtn.styled';

function SubmitBtn() {
  const departueCord = useSelector(
    (state: RootState) => state.distance.departure,
  );
  const arrivalCord = useSelector((state: RootState) => state.distance.arrival);

  const handleCordSubmit = async () => {
    if (!departueCord || !arrivalCord) return;
    const ex = await mapClient.getDriving({
      start: [departueCord?.x, departueCord?.y],
      goal: [arrivalCord?.x, arrivalCord?.y],
    });
    const distance = ex.route.traoptimal[0].summary.distance;
    const duration = ex.route.traoptimal[0].summary.duration;
  };

  return (
    <S.SubmitBtnWrapper>
      {departueCord && arrivalCord && (
        <Button width={100} height={100} onClick={handleCordSubmit}>
          Submit
        </Button>
      )}
    </S.SubmitBtnWrapper>
  );
}

export default SubmitBtn;
