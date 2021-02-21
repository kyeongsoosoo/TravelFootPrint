import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';

const LoadingWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 70vh;
  padding 15% 0;
`;

const LoadingSpinner = styled(FaSpinner)`
  font-size: 64px;
  animation: spin 1s linear infinite;
  color: ${props => props.theme.mainColor};
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingBox = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 70%;
  height: 35%;
`;

const LoadingText = styled.h1`
  font-size: ${props => props.theme.titleSize};
  font-weight: 800;
  text-align: center;
`;

const LoadingTextBox = styled.div`
  ${flexCenter}
  text-align: center;
  ${props => props.theme.middleSize}
  font-weight: 600;
  width: 100%;
  height: 80%;
  background-color: white;
  border-radius: 15px;
`;

export default {
  LoadingWrapper,
  LoadingText,
  LoadingBox,
  LoadingSpinner,
  LoadingTextBox,
};
