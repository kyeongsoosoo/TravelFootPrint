import styled from 'styled-components';

const FMWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 120px;
  gap: 0 8px;
  background-color: white;
  border-top: 1px solid black;
  border-radius: 10px;
`;

const FMcontentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default { FMWrapper, FMcontentWrapper };
