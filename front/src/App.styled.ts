import styled from 'styled-components';
import { flexCenter } from './lib/css/mixin';
import HeaderIcon from './lib/image/header.svg';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
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
  min-height: 70vh;
`;

const AppFooter = styled.footer`
  display: block;
  width: 100%;
  height: 10vh;
  text-align: center;
  color: #a4a4a3;
`;

export default { AppWrapper, AppHeader, AppMain, AppFooter };
