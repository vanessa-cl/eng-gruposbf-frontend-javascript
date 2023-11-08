export const mockNavigatorGeolocation = () => {
  const getCurrentPositionMock = jest.fn();

  const geolocation = {
    getCurrentPosition: getCurrentPositionMock,
  };

  Object.defineProperty(global.navigator, "geolocation", {
    value: geolocation,
  });

  return { getCurrentPositionMock };
};
