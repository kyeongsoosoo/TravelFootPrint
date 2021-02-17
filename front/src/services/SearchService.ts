declare global {
  interface Window {
    kakao;
  }
}

const { kakao } = window;

export function PlaceService(searchPlace = '안암') {
  const placeService = new kakao.maps.services.Places();

  // ps.keywordSearch(searchPlace, placeSearchCB);

  // function placeSearchCB(data, status, pagination) {
  //   console.log(data);
  //   console.log(pagination);
  // }
  return placeService;
}
