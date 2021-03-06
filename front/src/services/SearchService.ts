declare global {
  interface Window {
    kakao;
  }
}

const { kakao } = window;

export function PlaceService() {
  const placeService = new kakao.maps.services.Places();

  return placeService;
}
