import { useDispatch } from 'react-redux';
import { minusCount, plusCount } from '../redux/food/action';

export function useSavingCounter(name: string, weight: number) {
  const dispatch = useDispatch();
  const getPlus = () => {
    dispatch(plusCount({ name, weight }));
  };
  const getMinus = () => {
    dispatch(minusCount({ name, weight }));
  };

  return [getPlus, getMinus];
}
