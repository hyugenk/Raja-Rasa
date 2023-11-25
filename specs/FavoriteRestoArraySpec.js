/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {
    getRestaurant(id) {
        if (!id) {
            return;
        }

        return favoriteRestos.find((resto) => resto.id === id);
    },

    getAllRestaurants() {
        return favoriteRestos;
    },

    putRestaurant(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        if (this.getRestaurant(restaurant.id)) {
            return;
        }

        favoriteRestos.push(restaurant);
    },

    deleteRestaurant(id) {
        favoriteRestos = favoriteRestos.filter((restaurant) => restaurant.id !== id);
    },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
    afterEach(() => favoriteRestos = []);

    itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
