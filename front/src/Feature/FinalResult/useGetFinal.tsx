import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux';
import { setFinalTotal } from '../../redux/total/action';
import { OffsetTotalService } from '../../services/CalculService';
import { TicketService } from '../../services/TicketService';

export type ticketInfoType = [
  string,
  {
    scope: [start: number, end: number];
    description: string;
  },
];

export function useGetFinal() {
  const [isFinished, setFinished] = useState(false);
  const [ticketInfo, setInfo] = useState<ticketInfoType>();
  const [ticketURL, setURL] = useState<URL>();

  const offsetList = useSelector((state: RootState) => state.offset);

  const costTotal = useSelector((state: RootState) => state.total.semi);
  const finalTotal = useSelector((state: RootState) => state.total.final);

  const dispatch = useDispatch();

  useEffect(() => {
    const OffsetTotal = new OffsetTotalService(offsetList).getTotal();
    dispatch(setFinalTotal(OffsetTotal));
    setTimeout(() => {
      setFinished(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (finalTotal === null) return;
    const TS = new TicketService(finalTotal);
    const city = TS.getCity();
    const ticketURL = TS.getTicket();

    setInfo(city);
    setURL(ticketURL);
  }, [finalTotal]);

  return {
    isFinished,
    costTotal,
    finalTotal,
    ticketInfo,
    ticketURL,
  };
}
