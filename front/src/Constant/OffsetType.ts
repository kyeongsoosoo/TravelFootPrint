import { OffsetSelectType } from '../lib/types';

export const OffsetType: OffsetSelectType[] = [
  {
    name: '이메일 삭제',
    cost: 45,
    unitDescription: '단위는 통으로 하며 조회 여부는 상관 없습니다.',
    unit: 1,
    description:
      '데이터 보관 센터네는 1GB당 32kWh의 전력을 사용하는 냉각장치가 24시간 가동됩니다.',
    category: '이메일 삭제',
  },
  {
    name: '이면지 사용',
    cost: 1.7,
    unitDescription: '단위는 1장으로 합니다.',
    unit: 1,
    description:
      '데이터 보관 센터네는 1GB당 32kWh의 전력을 사용하는 냉각장치가 24시간 가동됩니다.',
    category: '이면지 사용',
  },
  {
    name: '컵 홀더 사용 안하기',
    cost: 6,
    unitDescription: '단위는 통으로 하며 조회 여부는 상관 없습니다.',
    unit: 1,
    description:
      '데이터 보관 센터네는 1GB당 32kWh의 전력을 사용하는 냉각장치가 24시간 가동됩니다.',
    category: '컵 홀더 사용 안하기',
  },
  {
    name: '버스 이용',
    cost: 4560,
    unitDescription:
      '1회 당 25km로 계산하며 승용차 대신 버스를 이용한 것을 의미합니다.',
    unit: 1,
    description:
      '데이터 보관 센터네는 1GB당 32kWh의 전력을 사용하는 냉각장치가 24시간 가동됩니다.',
    category: '버스 이용',
  },
  {
    name: '지하철 이용',
    cost: 5212,
    unitDescription: '단위는 통으로 하며 조회 여부는 상관 없습니다.',
    unit: 1,
    description:
      '1회 당 25km로 계산하며 승용차 대신 지하철을 이용한 것을 의미합니다.',
    category: '지하철 이용',
  },
  {
    name: '영상 스트리밍 끄기',
    cost: 3200,
    unitDescription:
      '단위는 1시간으로 하며 사용되는 데이터와 데이터관리, 전력을 고려합니다.',
    unit: 1,
    description:
      '데이터 보관 센터네는 1GB당 32kWh의 전력을 사용하는 냉각장치가 24시간 가동됩니다.',
    category: '영상 스트리밍 끄기',
  },
  {
    name: '형광등 끄기',
    cost: 34,
    unitDescription: '단위는 1시간으로 합니다.',
    unit: 1,
    description:
      '데이터 보관 센터네는 1GB당 32kWh의 전력을 사용하는 냉각장치가 24시간 가동됩니다.',
    category: '형광등 끄기',
  },
  {
    name: '사용 안하는 컴퓨터 끄기',
    cost: 90,
    unitDescription:
      '단위는 1시간으로 하며 모니터가 켜져 있는 시간으로 계산 됩니다.',
    unit: 1,
    description:
      '데이터 보관 센터네는 1GB당 32kWh의 전력을 사용하는 냉각장치가 24시간 가동됩니다.',
    category: '사용 안하는 컴퓨터 끄기',
  },
];
