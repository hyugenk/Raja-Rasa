/* eslint-disable linebreak-style */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestaurantIdb,
    restaurant: resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export {createLikeButtonPresenterWithResto};
