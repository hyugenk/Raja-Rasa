import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../template/template';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title" tabindex="0">Selamat Datang</h1>
        <h2 class="hero__tagline" tabindex="0">
        Temukan masakan kesukaan Anda dengan Sentuhan Khusus di Raja Rasa
        </h2>
      </div>
    </div>
    <div id="mainContent" class="contents">
      <h1 id="explore" tabindex="0">Explore Restaurant</h1>
      <div id="restaurants">
        
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
