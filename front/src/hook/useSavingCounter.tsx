import { useDispatch } from 'react-redux';
import { minusCount, plusCount } from '../redux/food/action';

export function useSavingCounter(name: string) {
  const dispatch = useDispatch();
  const getPlus = () => {
    dispatch(plusCount(name));
  };
  const getMinus = () => {
    dispatch(minusCount(name));
  };

  return [getPlus, getMinus];
}
