import { SelectType } from '../lib/types';

export const FoodType: SelectType[] = [
  { name: '치킨', cost: 661, category: 'Food' },
  { name: '피자', cost: 791, category: 'Food' },
  { name: '보쌈/족발', cost: 561, category: 'Food' },
  { name: '분식', cost: 633, category: 'Food' },
  { name: '기타', cost: 500, category: 'Food' },
  { name: '집밥이 최고예요!', cost: 0, category: 'Food' },
];

// 1. 오늘 하루 무엇을 시켜 드셨나요?
// 치킨, 피자, 보쌈/족발, 분식, 기타, 집밥이 최고예요!
// 각각 661, 791, 561, 633, 500 g
// *보쌈/족발 vs 야식?
