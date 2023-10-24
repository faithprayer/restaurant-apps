import restaurantDbSource from '../../data/restaurantDB-source';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const restaurantList = {
  async render() {
    return `
        <div class="loader">
        </div>
        
        <div class= "search">
            <search-container></search-container>
        </div>
        
        <div class = "card-content">
        </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.card-content');
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';

    const restaurantList = await restaurantDbSource.restaurantList();

    if (restaurantList.length !== 0) {
      loader.style.display = 'none';

      restaurantList.forEach((item) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(item);
      });

      const searchItems = document.querySelector('search-container');
      const buttonSearchClick = async () => {
        const searchAPI = await restaurantDbSource.searchRestaurant(searchItems.value);

        if (searchAPI.length !== 0) {
          const restaurantContainer = document.querySelector('.card-content');
          restaurantContainer.innerHTML = '';

          searchAPI.forEach((item) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(item);
          });
        } else {
          restaurantContainer.innerHTML = '';
          restaurantContainer.innerHTML += '<h2>Restaurant Not Found</h2>';
        }
      };
      searchItems.clickEvent = buttonSearchClick;
    }
  },
};

export default restaurantList;
