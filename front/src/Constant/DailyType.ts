import { SelectType } from '../lib/types';

export const CoffeType: SelectType[] = [
  {
    name: '안마셔요',
    cost: 0,
    category: 'Coffee',
  },
  {
    name: '1잔',
    cost: 21,
    category: 'Coffee',
  },
  {
    name: '2잔',
    cost: 42,
    category: 'Coffee',
  },
  {
    name: '3잔 이상',
    cost: 63,
    category: 'Coffee',
  },
];

export const MeetType: SelectType[] = [
  {
    name: '안먹었어요',
    cost: 0,
    category: 'Meet',
  },
  {
    name: '1잔',
    cost: 2250,
    category: 'Meet',
  },
  {
    name: '2잔',
    cost: 4500,
    category: 'Meet',
  },
  {
    name: '3잔 이상',
    cost: 6750,
    category: 'Meet',
  },
];

export const StreamingType: SelectType[] = [
  {
    name: '안봤어요',
    cost: 0,
    category: 'Streaming',
  },
  {
    name: '1시간정도',
    cost: 3200,
    category: 'Streaming',
  },
  {
    name: '2시간정도',
    cost: 6400,
    category: 'Streaming',
  },
  {
    name: '3시간 이상',
    cost: 9600,
    category: 'Streaming',
  },
];

export const ComputerTimeType: SelectType[] = [
  {
    name: '안썼어요!',
    cost: 0,
    category: 'ComputerTime',
  },
  {
    name: '1시간정도',
    cost: 90,
    category: 'ComputerTime',
  },
  {
    name: '2시간정도',
    cost: 180,
    category: 'ComputerTime',
  },
  {
    name: '3시간 이상',
    cost: 270,
    category: 'ComputerTime',
  },
];

export const LightTimeType: SelectType[] = [
  {
    name: '켜두지 않았어요',
    cost: 0,
    category: 'LightTime',
  },
  {
    name: '1시간',
    cost: 34,
    category: 'LightTime',
  },
  {
    name: '2시간',
    cost: 68,
    category: 'LightTime',
  },
  {
    name: '3시간 이상',
    cost: 102,
    category: 'LightTime',
  },
];

// List 창

// 1. 오늘 하루 무엇을 시켜 드셨나요?
// 치킨, 피자, 보쌈/족발, 분식, 기타, 집밥이 최고예요!
// 각각 661, 791, 561, 633, 500 g
// *보쌈/족발 vs 야식?

// 2. 필요 없는 이메일을 몇 통 보관하고 계신가요?
// ______ 통   (직접입력)
// 통 당 4g

// 3. 오늘 하루 커피를 몇 잔 마셨나요?
// 안마셔요!/ 1잔/ 2잔/ 3잔 이상
// 잔 당 21g
// *난 커피를 줄일 수 있다고 생각해서 컵 홀더 대신 넣었어, 커피를 줄이는게 너무 많은걸 요구한다고 생각이 들까?

// 4. 오늘 하루 소고기를 몇 인분 섭취하셨나요?
// 안먹었어요!/ 1인분/ 2인분/ 3인분 이상
// 1인분 당 2250g

// 5. 오늘 하루 영상 스트리밍을 몇 시간 하셨나요?
// 안봤어요!/ 1시간/ 2시간/ 3시간 이상
// 시간 당 3200g

// 6. 오늘 하루 사용하지 않는 컴퓨터를 켜 둔 적 있나요? 있다면 몇시간 켜 놓았나요?
// 사용하지 않으면 끕니다!/ 1시간/ 2시간/ 3시간 이상
// 시간 당 90g

// 7. 켜 놓고 나온 형광등이 있나요? 있다면 몇시간 켜 놓았나요?
// 사용하지 않으면 끕니다!/ 1시간/ 2시간/ 3시간 이상
// 시간 당 34g

// 8. 오늘 하루 자가용을 이용하셨나요?
// 네/ 아니요

// 9. 어디에서 어디로 이동하셨나요?
// (직접입력)
// (자가용) km당 208g
// (버스) km당 58g
