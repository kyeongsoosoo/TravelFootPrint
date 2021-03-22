import React from 'react';
import { ticketInfoType } from '../../useGetFinal';
import S from './TicketBox.styled';

type TicketBoxProp = {
  imgURL: URL | undefined;
  costTotal: number;
  finalTotal: number | null;
  ticketInfo: ticketInfoType | undefined;
};

function TicketBox({
  imgURL,
  costTotal,
  finalTotal,
  ticketInfo,
}: TicketBoxProp) {
  return (
    <S.TicketBoxWrapper>
      {console.log(ticketInfo)}
      {imgURL && (
        <S.TicketImage imgURL={imgURL}>
          <S.TicketImageTravelText>
            <S.TravelTextValue>{finalTotal}g</S.TravelTextValue>
            <S.TravelTextName>여행발자국</S.TravelTextName>
          </S.TicketImageTravelText>
          <S.TicketImageCostText>
            <S.TravelTextName>사용 탄소발자국</S.TravelTextName>
            <S.TravelTextValue>{costTotal}g</S.TravelTextValue>
          </S.TicketImageCostText>
        </S.TicketImage>
      )}
      {ticketInfo && (
        <>
          <S.TicketTitle>{ticketInfo[0]}</S.TicketTitle>
          <S.TicketDescript>
            <p style={{ color: '#8ED04C', display: 'inline' }}>{finalTotal}g</p>
            을 줄인 당신,
            <br />
          </S.TicketDescript>

          <S.TicketDescript>&nbsp;{ticketInfo[1].description}</S.TicketDescript>
        </>
      )}
    </S.TicketBoxWrapper>
  );
}

export default TicketBox;
