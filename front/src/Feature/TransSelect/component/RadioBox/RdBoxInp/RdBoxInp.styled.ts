import styled, { css } from 'styled-components';
import { flexCenter } from '../../../../../lib/css/mixin';

type TRdBoxInpWrapper = {
  isSelected: boolean;
};

const RdBoxInpWrapper = styled.div<TRdBoxInpWrapper>`
  ${flexCenter}
  width: 80%;
  height: 25%;
  background-color: ${({ isSelected }) =>
    isSelected
      ? css`
          ${props => props.theme.mainColor}
        `
      : 'white'};
  border-radius: 15px;
  cursor: pointer;
  & + & {
    margin-top: 5%;
  }
`;

const RdBoxInpText = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

export default {
  RdBoxInpWrapper,
  RdBoxInpText,
};
