/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

const resetData = async () => {
  (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (resto) => {
    await FavoriteRestaurantIdb.deleteRestaurant(resto.id);
  });
};

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    await resetData();
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
