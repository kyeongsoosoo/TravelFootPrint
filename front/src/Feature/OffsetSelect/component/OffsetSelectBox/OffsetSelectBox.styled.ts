import styled from 'styled-components';
import { flexCenter, responsiveSize } from '../../../../lib/css/mixin';

const OffsetSelectBoxWrapper = styled.main`
  ${flexCenter}
  width: 100%;
  min-height: 10vh;
  margin: 40px 0;
`;

const OffsetSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 5% 2%;
  ${responsiveSize(700, 500, 320, 320)}
  min-height: 300px;
  border-radius: 25px;
  background-color: white;
`;

const OffsetItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 14vh;
  margin: 20px 0;
`;

const OffsetItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
`;

const OffsetItemTextTitle = styled.div`
  font-size: ${({ theme }) => theme.middleFont}
  font-weight: 600;
`;

const OffsetItemTextDescript = styled.div`
  font-size: ${({ theme }) => theme.smallFont};
  margin-top: 10px;
  color: ${props => props.theme.fontColor};
`;

export default {
  OffsetSelectBoxWrapper,
  OffsetSelectBox,
  OffsetItemWrapper,
  OffsetItemTextWrapper,
  OffsetItemTextTitle,
  OffsetItemTextDescript,
};
