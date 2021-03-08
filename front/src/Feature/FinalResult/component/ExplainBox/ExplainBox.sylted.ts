import styled from 'styled-components';
import { flexCenter } from '../../../../lib/css/mixin';

const ExplainBoxWrapper = styled.ul`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
`;

const ExplainItemWrapper = styled.li`
  ${flexCenter}
  flex-direction: column;
  width: 80%;
  height: 13vh;
  border-radius: 10px;
  padding: 5%;
  box-sizing: border-box;
  background-color: white;
  & + & {
    margin-top: 1vh;
  }
`;

const ExplainItemTitle = styled.h1`
  font-size: ${({ theme }) => theme.middleFont};
  color: ${({ theme }) => theme.mainColor};
`;

const ExplainItemContent = styled.h2`
  font-size: ${({ theme }) => theme.middleFont};
`;

export default {
  ExplainBoxWrapper,
  ExplainItemContent,
  ExplainItemTitle,
  ExplainItemWrapper,
};
