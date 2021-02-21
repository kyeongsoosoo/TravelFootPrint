import styled from 'styled-components';
import { flexCenter } from './lib/css/mixin';
import HeaderIcon from './lib/image/header.svg';

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AppHeader = styled.header`
  width: 100%;
  height: 20vh;
  background-image: url(${HeaderIcon});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const AppMain = styled.main`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 65vh;
`;

const AppFooter = styled.footer`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  height: 15vh;
  text-align: center;
  color: #a4a4a3;
  border-top: 1px solid gray;
`;

export default { AppWrapper, AppHeader, AppMain, AppFooter };
