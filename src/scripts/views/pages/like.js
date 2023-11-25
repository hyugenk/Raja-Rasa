import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../template/template';

const Like = {
  async render() {
    return `
    <div class="contents">
      <h1 id="explore" tabindex="0">Favorite Restaurant</h1>
      <div id="restaurants">
        <h1 id="kosong">Daftar Favorit Kosong</h1>
      </div>
    </div>
      `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    const kosong = document.querySelector('#kosong');

    restaurants.forEach((restaurant) => {
      kosong.style.display = 'none';
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
