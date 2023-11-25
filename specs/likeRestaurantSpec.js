/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  afterEach(async () => {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    
    await Promise.all(restaurants.map(async (resto) => {
      await FavoriteRestaurantIdb.deleteRestaurant(resto.id);
    }));
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: "rqdv5juczeskfw1e867" });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: "rqdv5juczeskfw1e867" });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: "rqdv5juczeskfw1e867" });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestaurantIdb.getRestaurant("rqdv5juczeskfw1e867");

    expect(resto).toEqual({ id: "rqdv5juczeskfw1e867" });

    await FavoriteRestaurantIdb.deleteRestaurant("rqdv5juczeskfw1e867");
  });

  it('should not add a restaurant again when it is already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: "rqdv5juczeskfw1e867" });

    // Add a restaurant with ID "rqdv5juczeskfw1e867" to the list of liked restaurants
    await FavoriteRestaurantIdb.putRestaurant({ id: "rqdv5juczeskfw1e867" });
    // Simulate the user clicking the like restaurant button
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // No duplicate restaurants
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: "rqdv5juczeskfw1e867" }]);

    await FavoriteRestaurantIdb.deleteRestaurant("rqdv5juczeskfw1e867");
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
