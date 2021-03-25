import styled from 'styled-components';
import { flexCenter, responsiveSize } from '../../../../lib/css/mixin';

const TicketBoxWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  hieght: 60vh;
`;

type TicketImageProp = {
  imgURL: URL;
};

const TicketImage = styled.div<TicketImageProp>`
  position: relative;
  ${responsiveSize(700, 400, 320, 200)}
  background-image: url(${({ imgURL }) => `${imgURL}`});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TicketImageTravelText = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  /* PC (해상도 768px)*/
  @media all and (min-width: 768px) {
    right: 80px;
    bottom: 100px;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    right: 30px;
    bottom: 50px;
  }
`;
const TicketImageCostText = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  /* PC (해상도 768px)*/
  @media all and (min-width: 768px) {
    left: 60px;
    bottom: 20px;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    left: 30px;
    bottom: 15px;
  }
`;

const TravelTextValue = styled.h1`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.btnFont};
`;
const TravelTextName = styled.h2`
  margin-right: 10px;
  font-size: ${({ theme }) => theme.middleFont};
`;

const TicketTitle = styled.div`
  font-size: ${({ theme }) => theme.titleSize};
  margin: 30px 0;
`;

//   ${responsiveSize(400, 300, 250, 200)}
const TicketDescript = styled.div`
  white-space: pre;
  line-height: 1.2em;
  ${flexCenter}
  ${responsiveSize(500, 0, 250, 0)}
  text-align: center;
  font-size: ${({ theme }) => theme.middleFont};
  & + & {
    margin-top: 20px;
  }
`;

export default {
  TicketBoxWrapper,
  TicketImage,
  TicketImageTravelText,
  TravelTextName,
  TravelTextValue,
  TicketImageCostText,
  TicketTitle,
  TicketDescript,
};
