import styled from 'styled-components';
import { flexCenter, responsiveSize } from '../../lib/css/mixin';

const ExplainBoxWrapper = styled.ul`
  ${flexCenter}
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: 5vh;
  margin: 20px;
`;

const ExplainItemWrapper = styled.li`
  ${flexCenter}
  flex-shrink: 0;
  flex-direction: column;
  ${responsiveSize(500, 60, 250, 20)}
  border-radius: 10px;
  padding: 5%;
  box-sizing: border-box;
  background-color: white;
  & + & {
    margin-top: 30px;
  }
`;

const ExpalinItemHeaderBox = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

const ExplainItemTitle = styled.h1`
  font-size: ${({ theme }) => theme.middleFont};
  color: ${({ theme }) => theme.mainColor};
`;

const ExplainItemValue = styled.h2`
  font-size: ${({ theme }) => theme.middleFont};
`;

const ExplainItemContent = styled.h2`
  font-size: ${({ theme }) => theme.middleFont};
`;

export default {
  ExplainBoxWrapper,
  ExplainItemValue,
  ExpalinItemHeaderBox,
  ExplainItemContent,
  ExplainItemTitle,
  ExplainItemWrapper,
};
