import styled from 'styled-components';
import { flexCenter } from './lib/css/mixin';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexCenter};
  flex-direction: column;
  justify-content: space-between;
`;

const MainBox = styled.div`
  margin-top: 10%;
  border-radius: 10%;
  width: 70%;
  height: 80%;
  background-color: #ffffff;
`;

export default { AppWrapper, MainBox };
