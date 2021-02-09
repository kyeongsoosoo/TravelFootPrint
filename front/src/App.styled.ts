import styled from 'styled-components';
import { flexCenter } from './lib/css/mixin';
import HeaderIcon from './lib/image/header.svg';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexCenter};
  flex-direction: column;
  justify-content: space-between;
`;

const AppHeader = styled.header`
  width: 100%;
  height: 20%;
  background-image: url(${HeaderIcon});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const AppMain = styled.main`
  width: 100%;
  height: 70%;
`;

const AppFooter = styled.footer`
  width: 100%;
  height: 10%;
  text-align: center;
  color: #a4a4a3;
`;

export default { AppWrapper, AppHeader, AppMain, AppFooter };
