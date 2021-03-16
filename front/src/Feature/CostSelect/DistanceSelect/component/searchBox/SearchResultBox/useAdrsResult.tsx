import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { RootState } from '../../../../../../redux';
import {
  departureCord,
  arriveCord,
} from '../../../../../../redux/distance/action';
import { getLoacaData } from '../../../../../../redux/location/action';

import { PlaceService } from '../../../../../../services/SearchService';
import { TSearchBoxResult } from './SearchBoxResult';

export function useAdrsResult({
  setInput,
  searchKey = '안암',
  type,
}: TSearchBoxResult) {
  const PS = PlaceService();

  const SearchedList = useSelector(
    (state: RootState) => state.location.locationData,
  );

  const dispatch = useDispatch();

  const { data, mutate } = useSWR('address/result', async () => {
    await PS.keywordSearch(searchKey, (data: unknown) => {
      dispatch(getLoacaData(data));
    });
  });

  const handleItemClick = (item: any) => {
    if (type == 0) dispatch(departureCord({ x: item.x, y: item.y }));
    else dispatch(arriveCord({ x: item.x, y: item.y }));
    setInput(item.place_name);
  };

  return {
    SearchedList,
    isLoading: !data,
    handleUpdate: mutate,
    handleItemClick,
  };
}
