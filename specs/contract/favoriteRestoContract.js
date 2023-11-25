/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the resto that has been added', async () => {
      await favoriteResto.putRestaurant({ id: 1 });
      await favoriteResto.putRestaurant({ id: 2 });
      expect(await favoriteResto.getRestaurant(1))
          .toEqual({ id: 1 });
      expect(await favoriteResto.getRestaurant(2))
          .toEqual({ id: 2 });
      expect(await favoriteResto.getRestaurant(3))
          .toEqual(undefined);
  });

  it('should refuse a resto from being added if it does not have the correct property', async () => {
      await favoriteResto.putRestaurant({ aProperty: 'property' });

      expect(await favoriteResto.getAllRestaurants())
          .toEqual([]);
  });

  it('can return all of the resto that have been added', async () => {
      await favoriteResto.putRestaurant({ id: 1 });
      await favoriteResto.putRestaurant({ id: 2 });

      expect(await favoriteResto.getAllRestaurants())
          .toEqual([
              { id: 1 },
              { id: 2 },
          ]);
  });

  it('should remove favorite resto', async () => {
      await favoriteResto.putRestaurant({ id: 1 });
      await favoriteResto.putRestaurant({ id: 2 });
      await favoriteResto.putRestaurant({ id: 3 });

      await favoriteResto.deleteRestaurant(1);

      expect(await favoriteResto.getAllRestaurants())
          .toEqual([
              { id: 2 },
              { id: 3 },
          ]);
  });

  it('should handle request to remove a resto even though the resto has not been added', async () => {
      await favoriteResto.putRestaurant({ id: 1 });
      await favoriteResto.putRestaurant({ id: 2 });
      await favoriteResto.putRestaurant({ id: 3 });

      await favoriteResto.deleteRestaurant(4);

      expect(await favoriteResto.getAllRestaurants())
          .toEqual([
              { id: 1 },
              { id: 2 },
              { id: 3 },
          ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoModel };
