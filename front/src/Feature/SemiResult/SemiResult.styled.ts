import styled from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';

const SemiResultWrapper = styled.main`
  ${flexCenter}
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 10% 0;
`;

const SemiResultTitle = styled.h1`
  font-size: ${props => props.theme.titleSize};
`;

const SemiResultResultBox = styled.div`
  ${flexCenter}
  width: 70%;
  height: 30%;
  border-radius: 20px;
  background-color: white;
  font-size: 48px;
  font-weight: 800;
`;

const SemiResultTextBox = styled.div`
  font-size: 16px;
  width: 60%;
`;

export default {
  SemiResultWrapper,
  SemiResultTitle,
  SemiResultResultBox,
  SemiResultTextBox,
};
