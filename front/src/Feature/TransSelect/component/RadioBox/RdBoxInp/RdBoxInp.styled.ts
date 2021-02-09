import styled from 'styled-components';
import { flexCenter } from '../../../../../lib/css/mixin';

const RdBoxInpWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 15%;
`;

const RdBoxInpBtnWrapper = styled.div`
  ${flexCenter}
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;
`;

const RdBoxInpChoosedBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => props.theme.mainColor};
`;

const RdBoxInpText = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 30px;
  font-size: 20px;
`;

export default {
  RdBoxInpWrapper,
  RdBoxInpBtnWrapper,
  RdBoxInpChoosedBtn,
  RdBoxInpText,
};
