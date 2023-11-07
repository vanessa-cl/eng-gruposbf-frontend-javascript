import { geolocationService, MOCK_ALL_STORES } from "../GeolocationService";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => new Promise((resolve) => resolve(MOCK_ALL_STORES)),
  })
) as jest.Mock;

describe("should test geolocation service methods", () => {
  it("should return all stores list", async () => {
    const expectedResponse = MOCK_ALL_STORES;
    jest.spyOn(geolocationService, "getAllStores");
    const response = await geolocationService.getAllStores();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(geolocationService.getAllStores).toHaveBeenCalledTimes(1);
    expect(response).toEqual(expectedResponse);
  });
});
