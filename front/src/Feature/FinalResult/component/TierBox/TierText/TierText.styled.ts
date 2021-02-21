import styled from 'styled-components';

const TierTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 25vh;
`;

const TierTextTitle = styled.h1`
  font-size: 24px;
  font-weight: 800;
`;

const TierTextOffset = styled.h3`
  font-size: 12px;
`;

const TierTextContent = styled.h3`
  font-size: 12px;
`;

export default {
  TierTextWrapper,
  TierTextTitle,
  TierTextOffset,
  TierTextContent,
};
