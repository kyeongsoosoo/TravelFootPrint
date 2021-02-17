import styled from 'styled-components';
import { flexCenter } from '../../../../../lib/css/mixin';

const SearchResultBoxWrapper = styled.div`
  width: 100%;
  height: 500px;
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

const SRInumberingBox = styled.div`
  ${flexCenter}

  width: 30%;
  height: 100%;
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
  width: 70%;
  height: 100%;
`;

const SRItextPlaceName = styled.h1`
  width: 100%;
  font-size: 24px;
  font-weight: 800;
  color: ${props => props.theme.fontColor};
`;

const SRItextAddressName = styled.h2`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

export default {
  SearchResultBoxWrapper,
  SearchResultItemWrapper,
  SRInumberingBox,
  SRInumberingContent,
  SRItextPlaceName,
  SRItextBox,
  SRItextAddressName,
};
