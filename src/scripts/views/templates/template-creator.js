import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (item) => `
    <div class="card">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + item.pictureId}" alt="${item.name}">
        <h3 class="restoName" tabIndex="0"><a href="#/detail/${item.id}">${item.name}</a></h3>
        <p class="restoInfo" tabIndex="0">${item.description}</p>
        <h3 class="restoRating" tabIndex="0">Rating : ${item.rating}</h3>
    </div>
`;

const createRestaurantDetailTemplate = (data) => `
    <h2 class="heading-detail"> Detail ${data.name}</h2>
    <div class="detailContent">
        <div class="restoDetail">
            <div class="img-content">
                <img class="imgDetail" alt="${data.name}" src="${CONFIG.BASE_IMAGE_URL + data.pictureId}"/>
            </div>
            <div class="detail-info">
                <p class="description"><strong>Detail restaurant:</strong> <br>${data.description}</p>
                <p><i title="address" class="fa fa-map-marker-alt"></i>&emsp;${data.address}, ${data.city}</p>
                <p>Rating : ${data.rating}</p>
            </div>
        </div>
    </div>
`;

const createCategory = (categories) => {
  let categoryContent = '';

  categories.forEach((item) => {
    categoryContent += `
        <p>${item.name} </p>
        `;
  });

  return categoryContent;
};

const createFoods = (foods) => {
  let foodContent = '';

  foods.forEach((item) => {
    foodContent += `
        <p>${item.name} </p>
        `;
  });

  return foodContent;
};

const createDrinks = (drinks) => {
  let drinkContent = '';

  drinks.forEach((item) => {
    drinkContent += `
        <p>${item.name} </p>
        `;
  });

  return drinkContent;
};

const createReviews = (customerReviews) => {
  let reviewContent = '';

  customerReviews.forEach((item) => {
    reviewContent += `
        <p class="reviewName">Costumer : ${item.name} </p>
        <p class="reviewCustomer">Review : ${item.review} </p>
        <p class="reviewDate">Date : ${item.date} </p>
        <br>
        `;
  });

  return reviewContent;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart"></i></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like" >
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCategory,
  createFoods,
  createDrinks,
  createReviews,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
