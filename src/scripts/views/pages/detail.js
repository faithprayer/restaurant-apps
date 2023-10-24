import UrlParser from '../../routes/url-parser';
import restaurantDbSource from '../../data/restaurantDB-source';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import {
  createRestaurantDetailTemplate,
  createCategory,
  createDrinks,
  createFoods,
  createReviews,
  createLikeButtonTemplate,
} from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div class= "detail-container">
    </div>
    <div class="newContainer">
        <div class = "category-container">
            <h3>Restaurant Category</h3>
        </div>


        <div class= "card-container">
            <div class="food-container">
                <h3><i class="fa-solid fa-bowl-food fa-2x"></i>Food</h3>
            </div>
            <div class="drink-container">
                <h3> <i class = "fa-solid fa-mug-hot fa-2x"> </i>Drink</h3 >
            </div>
            <div class="review-container">
                <h3> <i class="fa-solid fa-star fa-2x"></i>Review</h3>
                <div class="reviewPost">
                    <input type="text" id="name" class="nameInput" placeholder="Enter your name..."></input>
                    <input type="text" id="review" class="reviewInput" placeholder="Enter your review..."></input>
                    <button class="reviewBtn" id="reviewButton" aria-label="submit this review">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await restaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.detail-container');
    const categoryContainer = document.querySelector('.category-container');
    const foodContainer = document.querySelector('.food-container');
    const drinkContainer = document.querySelector('.drink-container');
    const reviewContainer = document.querySelector('.review-container');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      resto: {
        id: restaurants.restaurant.id,
        name: restaurants.restaurant.name,
        description: restaurants.restaurant.description,
        pictureId: restaurants.restaurant.pictureId,
        rating: restaurants.restaurant.rating,
      },
    });

    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurants.restaurant);
    categoryContainer.innerHTML += createCategory(restaurants.restaurant.categories);
    foodContainer.innerHTML += createFoods(restaurants.restaurant.menus.foods);
    drinkContainer.innerHTML += createDrinks(restaurants.restaurant.menus.drinks);
    reviewContainer.innerHTML += createReviews(restaurants.restaurant.customerReviews);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    document.getElementById('reviewButton').addEventListener('click', async () => {
      const NameUpdate = document.querySelector('#name').value;
      const ReviewUpdate = document.querySelector('#review').value;

      // postReview(name, review);
      const newReview = {
        id: url.id.toString(),
        name: NameUpdate,
        review: ReviewUpdate,
      };

      // eslint-disable-next-line no-unused-vars
      const restaurants = await restaurantDbSource.postReviewRestaurant(newReview);
      location.reload();
    });
  },
};

export default Detail;
