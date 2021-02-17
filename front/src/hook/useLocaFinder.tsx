import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLoacaData } from '../redux/location/action';

declare global {
  interface Window {
    kakao;
  }
}

const { kakao } = window;

export function useLocaFinder(searhPlace = '안암') {
  const [locaData, setLoca] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('go');
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searhPlace, placeSearchCB);

    function placeSearchCB(data, status, pagination) {
      dispatch(getLoacaData(data));
    }
    console.log('fin');
  }, [searhPlace]);
  return { locaData };
}
