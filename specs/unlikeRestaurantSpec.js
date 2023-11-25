/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: "rqdv5juczeskfw1e867" });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant("rqdv5juczeskfw1e867");
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: "rqdv5juczeskfw1e867" });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: "rqdv5juczeskfw1e867" });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: "rqdv5juczeskfw1e867" });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw an error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: "rqdv5juczeskfw1e867" });

    // First, remove the restaurant from the list of liked restaurants
    await FavoriteRestaurantIdb.deleteRestaurant("rqdv5juczeskfw1e867");

    // Then, simulate the user clicking the unlike restaurant widget
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
