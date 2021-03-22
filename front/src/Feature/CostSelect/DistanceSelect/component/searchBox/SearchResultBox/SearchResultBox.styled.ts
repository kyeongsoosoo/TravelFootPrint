import styled from 'styled-components';
import { flexCenter, responsiveSize } from '../../../../../../lib/css/mixin';

const SearchResultBoxWrapper = styled.div`
  ${responsiveSize(600, 600, 300, 400)}
  @media all and (min-width: 768px) {
    max-height: 600px;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    max-height: 400px;
  }
  
  flex-shrink: 0;
  background-color: white;
  overflow-y: scroll;
  cursor: pointer;
`;

const SearchResultItemWrapper = styled.article`
  display: flex;
  flex-shrink: 0;
  ${responsiveSize(600, 70, 300, 50)}
  border-top: 1px solid black;
`;

const SRInumberingContent = styled.div`
  ${flexCenter}
  border-radius: 15px;
  width: 50%;
  height: 50%;
  background-color: ${props => props.theme.mainColor};
  color: white;
`;

const SRItextBox = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 90%;
  height: 100%;
`;

type SRItextPlaceNameType = {
  overSize: boolean;
};

const SRItextPlaceName = styled.h1<SRItextPlaceNameType>`
  width: 100%;
  ${props => (props.overSize ? props.theme.smallFont : props.theme.middleFont)}
  font-weight: 800;
  color: ${props => props.theme.fontColor};
`;

const SRItextAddressName = styled.h2`
  width: 100%;
  ${props => props.theme.smallFont};
  font-weight: 400;
`;

export default {
  SearchResultBoxWrapper,
  SearchResultItemWrapper,
  SRInumberingContent,
  SRItextPlaceName,
  SRItextBox,
  SRItextAddressName,
};
