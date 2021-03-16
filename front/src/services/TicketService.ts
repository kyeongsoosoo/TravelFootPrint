import { TicketInfo, Ticket } from '../Constant/TicketType';

export class TicketService {
  constructor(private travelFoot: number) {}

  getCity() {
    const TicketInfoObj = Object.entries(TicketInfo);

    console.log(TicketInfoObj);
    //scope[0] = 출발점, scope[1] = 도착점
    const selectedCity = TicketInfoObj.find(
      item =>
        item[1].scope[0] <= this.travelFoot &&
        item[1].scope[1] >= this.travelFoot,
    );
    console.log(selectedCity);

    return selectedCity;
  }

  getTicket() {
    const city = this.getCity() || TicketInfo['서울'];

    const ticketObj = Object.entries(Ticket);

    const ticketURL = ticketObj.find(item => item[0] === city[0]);

    if (ticketURL === undefined) return Ticket['서울'];
    return ticketURL[1];
  }
}
