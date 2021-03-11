import styled, { css } from 'styled-components';
import { flexCenter, responsiveSize } from '../../../lib/css/mixin';

type TRdBoxInpWrapper = {
  isSelected: boolean;
};

const RdBoxInpWrapper = styled.div<TRdBoxInpWrapper>`
  ${flexCenter}
  ${responsiveSize(500, 100, 300, 60)}
  height: 7vh;
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
