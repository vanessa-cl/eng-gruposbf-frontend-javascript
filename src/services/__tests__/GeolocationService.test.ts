import { geolocationService, MOCK_STORES } from "../GeolocationService";

// const fakeFetch = jest.fn();
// window.fetch = fakeFetch;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: MOCK_STORES,
  })
) as jest.Mock;

describe("should test geolocation service methods", () => {
  it("should return all stores list", async () => {
    const expectedResponse = MOCK_STORES;
    jest.spyOn(geolocationService, "getAllStores");
    const response = await geolocationService.getAllStores();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(geolocationService.getAllStores).toHaveBeenCalledTimes(1);
    expect(response).toEqual(expectedResponse);
  });
});
