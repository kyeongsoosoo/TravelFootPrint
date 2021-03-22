import { OffsetSelectType } from '../lib/types';

export const OffsetType: OffsetSelectType[] = [
  {
    name: '이메일 삭제',
    cost: 45,
    unitDescription: '단위는 통으로 하며 조회 여부는 상관 없습니다.',
    unit: 50,
    description:
      '데이터 보관 센터네는 1GB당 32kWh의 전력을 사용하는 냉각장치가 24시간 가동됩니다.',
    category: '이메일 삭제',
  },
  {
    name: '커피 한잔 덜 마시기',
    cost: 21,
    unitDescription: '단위는 한 잔으로 하며 아메리카노를 기준으로 합니다.',
    unit: 1,
    description:
      '아메리카노 한잔은 21g, 우유가 들어가는 카푸치노의 경우 235g의 탄소발자국이 배출됩니다. ',
    category: '커피 마시기',
  },
  {
    name: '고기 한번 덜 먹기 ',
    cost: 6,
    unitDescription: '단위는 1인분으로 하며 1인분은 100g 입니다.',
    unit: 1,
    description:
      '아메리카노 한잔은 21g, 우유가 들어가는 카푸치노의 경우 235g의 탄소발자국이 배출됩니다. ',
    category: '고기 먹기',
  },

  {
    name: '버스 이용',
    cost: 180,
    unitDescription:
      '앞서 입력한 거리를 자가용 대신 버스를 이용합니다.',
    unit: 1,
    description:
      '자가용은 버스보다 탄소발자국을 약 2배 더 배출합니다.',
    category: 'isDriving',
  },
  {
    name: '지하철 이용',
    cost: 200,
    unitDescription: '앞서 입력한 거리를 자가용 대신 버스를 이용합니다.',
    unit: 1,
    description:
    '자가용은 지하철보다 탄소발자국을 약 2배 더 배출합니다.',
    category: 'isDriving',
  },
  {
    name: '영상 스트리밍 끄기',
    cost: 56,
    unitDescription:
      '단위는 30분으로 하며 데이터, 데이터 관리, 전력 사용을 고려합니다.',
    unit: 30,
    description:
      '동영상 스트리밍은 인터넷에서 발생하는 트래픽의 상당 부분을 차지하며 이는 전력 소비와 직결됩니다.',
    category: '스트리밍 시청하기',
  },

  {
    name: '사용 안하는 컴퓨터 끄기',
    cost: 2,
    unitDescription:
      '단위는 30분으로 합니다.',
    unit: 30,
    description:
      '절전 상태인 컴퓨터도 약 30%의 전력을 사용합니다.',
    category: '컴퓨터 사용하기',
  },
];
