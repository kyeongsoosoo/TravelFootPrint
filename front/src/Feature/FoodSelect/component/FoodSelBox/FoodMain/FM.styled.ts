import styled from 'styled-components';

const FMWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 20%;
  overflow-y: scroll;
`;

const FMcontentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default { FMWrapper, FMcontentWrapper };
