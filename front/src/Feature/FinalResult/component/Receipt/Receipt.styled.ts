import { FaBarcode } from 'react-icons/fa';
import LogoTitle from '../../../../lib/image/LogoTitle.svg';

import styled from 'styled-components';

const ReceiptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  min-height: 70vh;

  background-color: white;
`;

const ReceiptTitle = styled.div`
  background-image: url(${LogoTitle});
  background-repeat: no-repeat;
  bakcground-position: center;
  background-size: 100% 80%;
  width: 40%;
  height: 10%;
  color: black;
`;

const ReceiptDate = styled.div`
  font-size: 16px;
  color: gray;
`;

const LinedBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  min-height: 25px;
  border-bottom: 1px dashed grey;
  color: gray;
`;

const ReceiptItemBox = styled.div`
  width: 100%;
  height: 7vh;
  color: black;
`;

const ReceiptItemTitle = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

const ReceiptItemDescript = styled.div`
  width: 100%;
  height: 20px;
  font-size: 12px;
`;

const ReceiptBarcode = styled(FaBarcode)`
  font-size: 64px;
  color: gray;
`;

export default {
  ReceiptWrapper,
  ReceiptBarcode,
  ReceiptTitle,
  ReceiptItemTitle,
  ReceiptItemDescript,
  ReceiptItemBox,
  ReceiptDate,
  LinedBox,
};
