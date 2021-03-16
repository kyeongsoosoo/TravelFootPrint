import styled, { css } from 'styled-components';
import { flexCenter, responsiveSize } from '../../lib/css/mixin';

type TRdBoxInpWrapper = {
  isSelected: boolean;
};

const RdBoxInpWrapper = styled.div<TRdBoxInpWrapper>`
  ${flexCenter}
  ${responsiveSize(500, 80, 270, 50)}
  height: 7vh;
  background-color: ${({ isSelected }) =>
    isSelected
      ? css`
          ${props => props.theme.mainColor}
        `
      : 'white'};
  border-radius: 20px;
  cursor: pointer;
  & + & {
    margin-top: 10px;
  }
`;

const RdBoxInpText = styled.div`
  font-size: ${({ theme }) => theme.btnFont}
  font-weight: 800;
`;

export default {
  RdBoxInpWrapper,
  RdBoxInpText,
};
