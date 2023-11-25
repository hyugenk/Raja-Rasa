import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../template/template';

const Home = {
  async render() {
    return `
    
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
