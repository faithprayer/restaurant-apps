import FavoriteRestoIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="card-content">
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('.card-content');

    restoContainer.innerHTML = '';
    if (restaurants.length !== 0) {
      restaurants.forEach((restaurants) => {
        restoContainer.innerHTML += createRestaurantItemTemplate(restaurants);
      });
    } else {
      restoContainer.innerHTML += '<h2>There is No Favorite Restaurant</h2>';
    }
  },
};

export default Like;
