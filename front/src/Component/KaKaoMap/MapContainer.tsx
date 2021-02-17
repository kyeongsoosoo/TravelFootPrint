/* eslint-disable @typescript-eslint/indent */
import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao;
  }
}

const { kakao } = window;

const MapContainer = ({ searchPlace = '안암' }) => {
  useEffect(() => {
    // const container = document.getElementById('myMap');
    // const options = {
    //   center: new kakao.maps.LatLng(33.450701, 126.570667),
    //   level: 3,
    // };
    // const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      console.log(data);
      console.log(pagination);
      //   if (status === kakao.maps.services.Status.OK) {
      //     const bounds = new kakao.maps.LatLngBounds();
      //     console.log(bounds);

      //     for (let i = 0; i < data.length; i++) {
      //       displayMarker(data[i]);
      //       bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      //     }

      //     map.setBounds(bounds);
    }

    // function displayMarker(place) {
    //   const marker = new kakao.maps.Marker({
    //     map: map,
    //     position: new kakao.maps.LatLng(place.y, place.x),
    //   });
    //   kakao.maps.event.addListener(marker, 'click', function () {
    //     // 마커를 클릭하면 장소명이 인포윈도우에 표출
    //     infowindow.setContent(
    //       '<div style="padding:5px;font-size:12px;">' +
    //         place.place_name +
    //         '</div>',
    //     );

    //     infowindow.open(map, marker);
    //   });
  }, [searchPlace]);

  return (
    <div
      id="myMap"
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
  );
};

export default MapContainer;
