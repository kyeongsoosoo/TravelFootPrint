import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationType } from '../../../../../lib/types';

import { RootState } from '../../../../../redux';
import {
  arriveCord,
  departureCord,
} from '../../../../../redux/distance/action';
import { getLoacaData } from '../../../../../redux/location/action';
import { PlaceService } from '../../../../../services/SearchService';

import S from './SearchResultBox.styled';

type TSearchBoxResult = {
  searchKey: string | undefined;
  type: LocationType;
};

function SearchBoxResult({ searchKey = '안암', type }: TSearchBoxResult) {
  const PS = PlaceService();

  const dispatch = useDispatch();

  const SearchedList = useSelector(
    (state: RootState) => state.location.locationData,
  );

  useEffect(() => {
    PS.keywordSearch(searchKey, placeSearchCB);

    function placeSearchCB(data, status, pagination) {
      dispatch(getLoacaData(data));
    }
  }, [searchKey]);

  const renderSearchedList = useCallback(
    (item, idx) => {
      const handleItemClick = () => {
        if (type == 0) dispatch(departureCord({ x: item.x, y: item.y }));
        else dispatch(arriveCord({ x: item.x, y: item.y }));
      };
      return (
        <S.SearchResultItemWrapper key={item.id} onClick={handleItemClick}>
          <S.SRItextBox>
            <S.SRItextPlaceName>{item.place_name}</S.SRItextPlaceName>
            <S.SRItextAddressName>{item.address_name}</S.SRItextAddressName>
          </S.SRItextBox>
        </S.SearchResultItemWrapper>
      );
    },
    [SearchedList],
  );

  return (
    <S.SearchResultBoxWrapper>
      {SearchedList ? SearchedList.map(renderSearchedList) : <div>Hi</div>}
    </S.SearchResultBoxWrapper>
  );
}

export default SearchBoxResult;
