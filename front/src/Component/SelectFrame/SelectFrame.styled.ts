import styled from 'styled-components';
import { TotalPage } from '../../Constant/Page';
import { flexCenter, responsiveSize } from '../../lib/css/mixin';

type ProgressBarType = {
  pageNum: number;
};

const SelectFrameWrapper = styled.main`
  ${flexCenter}
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  padding-bottom: 20px;
`;

const SelectFrameProgressWrapper = styled.div`
  position: relative;
  ${flexCenter};
  justify-content: flex-start;
  ${responsiveSize(400, 20, 200, 10)};
  background-color: white;
  border-radius: 5px;
`;
const SelectFrameProgressBar = styled.div<ProgressBarType>`
  ${({ pageNum }) =>
    responsiveSize(
      400 * (pageNum / TotalPage),
      20,
      200 * (pageNum / TotalPage),
      10,
    )}
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 5px;
`;

const SelectFrameTitle = styled.h1`
  ${props => props.theme.titleSize}
  letter-spacing: 1px;
  margin: 10px 0;
`;

export default {
  SelectFrameWrapper,
  SelectFrameTitle,
  SelectFrameProgressBar,
  SelectFrameProgressWrapper,
};
