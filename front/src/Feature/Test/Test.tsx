import React from 'react';
import { Ticket } from '../../Constant/TicketType';
import Busan from '../../lib/assets/tickets/busan.svg';

function Test() {
  const TicketTest = Ticket;

  return (
    <div
      style={{
        backgroundImage: `url(${TicketTest['가평']})`,
        width: '100px',
        height: '100px',
      }}
    />
  );
}

export default Test;
