import { SelectType } from '../lib/types';

export const FoodType: SelectType[] = [
  { name: '치킨', cost: 661, category: '배달 음식' },
  { name: '피자', cost: 791, category: '배달 음식' },
  { name: '보쌈/족발', cost: 561, category: '배달 음식' },
  { name: '분식', cost: 633, category: '배달 음식' },
  { name: '기타', cost: 500, category: '배달 음식' },
  { name: '집밥이 최고예요!', cost: 0, category: '배달 음식' },
];

// 1. 오늘 하루 무엇을 시켜 드셨나요?
// 치킨, 피자, 보쌈/족발, 분식, 기타, 집밥이 최고예요!
// 각각 661, 791, 561, 633, 500 g
// *보쌈/족발 vs 야식?
