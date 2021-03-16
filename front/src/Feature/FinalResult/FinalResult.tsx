import React from 'react';

import Loading from '../../Component/Loading/Loading';
import { useGetFinal } from './useGetFinal';

import S from './FinalResult.styled';
import { TicketService } from '../../services/TicketService';
import TicketBox from './component/TicketBox/TicketBox';
import Divider from '../../Component/Divider/Divider';
import OffsetList from './component/OffsetList/OffsetList';
import Button from '../../Component/Button/Button';

function FinalResult() {
  const {
    isFinished,
    costTotal,
    finalTotal,
    ticketInfo,
    ticketURL,
  } = useGetFinal();

  const TicketBoxProp = {
    costTotal,
    finalTotal,
    ticketInfo,
    imgURL: ticketURL,
  };

  return (
    <>
      {!isFinished ? (
        <Loading />
      ) : (
        <>
          <S.FinalResultBox>
            {ticketURL && <TicketBox {...TicketBoxProp} />}
            <Divider />
            <OffsetList />
            <Button width={500} height={150} to="/">
              다시하기
            </Button>
          </S.FinalResultBox>
        </>
      )}
    </>
  );
}

export default FinalResult;
