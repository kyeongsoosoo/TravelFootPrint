import styled from 'styled-components';
import { flexCenter } from '../../../../../lib/css/mixin';

const SearchResultBoxWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background-color: white;
  overflow-y: auto;
  cursor: pointer;
`;

const SearchResultItemWrapper = styled.article`
  display: flex;
  width: 100%;
  height: 20%;
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
