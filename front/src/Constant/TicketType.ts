import {
  Busan,
  Buyoe,
  Damyang,
  Gangneung,
  Gapyeong,
  Gyeongju,
  Hoengseong,
  Jeju,
  Jeonju,
  Pohang,
  Seoul,
  Suwon,
  Yeosu,
} from '../lib/assets/tickets';

export type TicketCityType =
  | '부산'
  | '부여'
  | '담양'
  | '강릉'
  | '가평'
  | '경주'
  | '횡성'
  | '제주'
  | '전주'
  | '포항'
  | '서울'
  | '수원'
  | '여수';

export type TicketType = {
  [key in TicketCityType]: URL;
};

export type TicketInfoType = {
  [key in TicketCityType]: {
    scope: [start: number, end: number];
    description: string;
  };
};

export const Ticket: TicketType = {
  부산: Busan,
  부여: Buyoe,
  담양: Damyang,
  강릉: Gangneung,
  가평: Gapyeong,
  경주: Gyeongju,
  횡성: Hoengseong,
  제주: Jeju,
  전주: Jeonju,
  포항: Pohang,
  서울: Seoul,
  수원: Suwon,
  여수: Yeosu,
};

export const TicketInfo: TicketInfoType = {
  부산: {
    scope: [8001, 10000],
    description: '소중한 사람들과 부산 해운대에서 바다 수영 어떠세요? ',
  },
  부여: {
    scope: [2701, 3700],
    description:
      '국보 제9호인 부여의 정림사지를 구경하며 우리 조상들의 지혜를 다시 한번 느껴봐요.',
  },
  담양: {
    scope: [5201, 6300],
    description:
      '대나무 향기 따라 떠나는 여행, 담양 죽녹원에서 힐링 여행을 즐겨봐요.',
  },
  강릉: {
    scope: [4501, 5200],
    description:
      '해돋이 명소로 유명한 정동진까지 왔습니다. 정동진역은 세계에서 바닷가에 가장 가까운 기차역으로 기네스북에 등재되어 있기도 합니다!',
  },
  가평: {
    scope: [1201, 2100],
    description:
      '연 330만 명의 관광객이 몰리는 남이섬은 다양한 배경과 함께 사진 촬영을 즐길 수 있습니다. 인생샷 건지러 가볼까요?',
  },
  경주: {
    scope: [6301, 6900],
    description:
      '경주까지 왔으니 첨성대를 관광하며 선덕여왕의 지혜를 한번 느껴볼까요?',
  },
  횡성: {
    scope: [2101, 2700],
    description:
      '횡성에서 즐기는 한우 축제! 입 안에서 녹는 최고급 한우를 맛볼까요?',
  },
  제주: {
    scope: [10001, 1000000],
    description:
      '대단해요! 탄소발자국을 아껴 제주도까지 왔어요, 조금만 더 노력하면 해외도 갈 수 있겠어요!',
  },
  전주: {
    scope: [3701, 4500],
    description: '전주 한옥마을에서 연인과 한복 데이트 어때요?',
  },
  포항: {
    scope: [7401, 8000],
    description: '우리나라 내륙에서 해가 가장 먼저 뜨는 호미곶으로 놀러가봐요!',
  },
  서울: {
    scope: [0, 300],
    description:
      '탄소를 상쇄하지 않아 아직 출발을 못했어요! 내가 줄일 수 있는 탄소발자국을 줄여가며 여행 발자국을 넓혀봐요!',
  },
  수원: {
    scope: [301, 1200],
    description:
      '정교함을 자랑하는 수원화성을 돌아보며 정조 대왕이 꿈 꾼 이상적인 도시를 구경해봐요!',
  },
  여수: {
    scope: [6901, 7400],
    description:
      '먹을 거리가 너무나도 많은 여수까지 왔습니다. 저녁에는 포장마차 거리에서 소주한잔 해야하는거, 아시죠?',
  },
};

// 서울		0 grams
// 수원화성		1~760		정교함을 자랑하는 수원화성을 돌아보며 정조 대왕이 꿈 꾼 이상적인 도시를 구경해봐요!
// 용인 에버랜드	761~1200
// 가평 남이섬	1201~2000	연 330만 명의 관광객이 몰리는 남이섬은 다양한 배경과 함께 사진 촬영을 즐길 수 있습니다. 인생샷 건지러 가볼까요?
// 횡성 한우축제	2001~2700
// 부여 정림사지	2701~3700	국보 제9호인 부여의 정림사지를 구경하며 우리 조상들의 지혜를 다시 한번 느껴봐요.
// 전주 한옥마을	3701~4500	전주 한옥마을에서 연인과 한복 데이트 어때요?
// 강릉 정동진	4501~5300	해돋이 명소로 유명한 정동진까지 왔습니다. 정동진역은 세계에서 바닷가에 가장 가까운 기차역으로 기네스북에 등재되어 있기도 합니다!
// 담양 죽녹원	5301~5900	대나무 향기 따라 떠나는 여행, 담양 죽녹원에서 힐링 여행을 즐겨봐요.
// 경주 첨성대	5901~		경주까지 왔으니 첨성대를 관광하며 선덕여왕의 지혜를 한번 느껴볼까요?
// 여수 엑스포			먹을 거리가 너무나도 많은 여수까지 왔습니다. 저녁에는 포장마차 거리에서 소주한잔 해야하는거, 아시죠?
// 포항 호미곶			우리나라 내륙에서 해가 가장 먼저 뜨는 호미곶으로 놀러가봐요!
// 부산 해운대			소중한 사람들과 부산 해운대에서 바다 수영 어떠세요?
// 제주도				대단해요! 탄소발자국을 아껴 제주도까지 왔어요, 조금만 더 노력하면 해외도 갈 수 있겠어요!

// 서울 – 제주도 : 521km, 10428g		10000 이상	대단해요! 탄소발자국을 아껴 제주도까지 왔어요, 조금만 더 노력하면 해외도 갈 수 있겠어요!
// 서울 – 부산 해운대 : 407km, 8140g		8001-10000	소중한 사람들과 부산 해운대에서 바다 수영 어떠세요? 
// 서울 – 포항 호미곶 : 372km, 7440g		7401-8000	우리나라 내륙에서 해가 가장 먼저 뜨는 호미곶으로 놀러가봐요!
// 서울 – 여수 엑스포 : 357km, 7140g		6901-7400	먹을 거리가 너무나도 많은 여수까지 왔습니다. 저녁에는 포장마차 거리에서 소주한잔 해야하는거, 아시죠?
// 서울 – 경주 첨성대 : 330km, 6600g		6301-6900	경주까지 왔으니 첨성대를 관광하며 선덕여왕의 지혜를 한번 느껴볼까요?
// 서울 – 담양 죽녹원 : 286km, 5720g		5201-6300	대나무 향기 따라 떠나는 여행, 담양 죽녹원에서 힐링 여행을 즐겨봐요!
// 서울 – 강릉 정동진 : 247km, 4940g		4501-5200	해돋이 명소로 유명한 정동진까지 왔습니다. 정동진역은 세계에서 바닷가에 가장 가까운 기차역으로 기네스북에 등재되어 있기도 합니다!
// 서울 – 전주 한옥마을 : 216km, 4320g		3701-4500	전주 한옥마을에서 연인과 한복 데이트 어때요?
// 서울 – 부여 정림사지 : 176km, 3520g		2701-3700	국보 제9호인 부여의 정림사지를 구경하며 우리 조상들의 지혜를 다시 한번 느껴봐요.
// 서울 – 횡성 한우축제 : 115km, 2300g		2101-2700	
// 서울 – 오션월드 : 93km, 1860g		1601-2100	파도풀과 다양한 라이드를 이용하며 물놀이를 즐겨봐요!
// 서울 – 가평 남이섬 : 78km, 1560g		1201-1600	연 330만 명의 관광객이 몰리는 남이섬은 다양한 배경과 함께 사진 촬영을 즐길 수 있습니다. 인생샷 건지러 가볼까요?
// 서울 – 에버랜드 : 47km, 940g		801-1200		이번 주말 가족들과 함께 에버랜드로 소풍 어떠세요?
// 서울 – 수원화성 : 38km, 760g		300-800		정교함을 자랑하는 수원화성을 돌아보며 정조 대왕이 꿈 꾼 이상적인 도시를 구경해봐요!