import { useDispatch } from 'react-redux';
import { minusCount, plusCount } from '../redux/food/action';

export function useFoodCounter(name: string, weight: number) {
  const dispatch = useDispatch();
  const setFoodPlus = () => {
    dispatch(plusCount({ name, weight }));
  };
  const setFoodMinus = () => {
    dispatch(minusCount({ name, weight }));
  };

  return [setFoodPlus, setFoodMinus];
}
