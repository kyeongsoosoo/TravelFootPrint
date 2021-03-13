import styled from 'styled-components';
import { flexCenter, responsiveSize } from '../../lib/css/mixin';

const SemiResultWrapper = styled.main`
  ${flexCenter}
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  min-height: 70vh;
  padding: 10% 0;
`;

const SemiResultTitle = styled.h1`
  font-size: ${props => props.theme.titleSize};
`;

const SemiResultResultBox = styled.div`
  ${flexCenter}
  ${responsiveSize(400, 150, 250, 100)}
  height: 30%;
  border-radius: 20px;
  background-color: white;
  font-size: ${({ theme }) => theme.titleSize};
  font-weight: 800;
  margin: 10px 0;
`;

const SemiResultTextBox = styled.div`
  ${responsiveSize(700, 100, 300, 50)}
  text-align: center;
  line-height: 1.3em;
  font-size: ${({ theme }) => theme.middleFont};
  width: 60%;
`;

export default {
  SemiResultWrapper,
  SemiResultTitle,
  SemiResultResultBox,
  SemiResultTextBox,
};
