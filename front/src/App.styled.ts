import styled from 'styled-components';
import { flexCenter, responsiveSize } from './lib/css/mixin';
import HeaderIcon from './lib/image/header.svg';

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const AppHeader = styled.header`
  ${responsiveSize(400, 150, 300, 100)}

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
  font-size: ${({ theme }) => theme.smallFont}
  background-color: ${props => props.theme.footerColor};
  color: #ffffff;
  letter-spacing: 1.5px;
`;

export default { AppWrapper, AppHeader, AppMain, AppFooter };
