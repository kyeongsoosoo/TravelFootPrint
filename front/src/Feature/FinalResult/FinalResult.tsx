import React from "react";

import Loading from "../../Component/Loading/Loading";
import { useGetFinal } from "./useGetFinal";

import S from "./FinalResult.styled";
import { TicketService } from "../../services/TicketService";
import TicketBox from "./component/TicketBox/TicketBox";
import Divider from "../../Component/Divider/Divider";
import OffsetList from "./component/OffsetList/OffsetList";
import Button from "../../Component/Button/Button";

function FinalResult() {
  const {
    isFinished,
    costTotal,
    finalTotal,
    ticketInfo,
    ticketURL,
    handleRetryBtn,
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
            <S.FinalResultTextBox>
              여행발자국은 여행을 가기 위해 사용될 <br /> 탄소발자국을
              일컫습니다.
            </S.FinalResultTextBox>
            <S.FinalResultTextBox>
              일상에서 더 많은 탄소를 줄일수록 <br />더 멀리 여행을 갈 수
              있습니다.
            </S.FinalResultTextBox>
            <Button width={500} height={100} to="/" onClick={handleRetryBtn}>
              다시하기
            </Button>
          </S.FinalResultBox>
        </>
      )}
    </>
  );
}

export default FinalResult;
