import API_ENDPOINT from '../globals/api-endpoint';

class restaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async searchRestaurant(value) {
    const response = await fetch(API_ENDPOINT.SEARCH(value));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async postReviewRestaurant(newReview) {
    const option = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newReview),
    };

    const response = await fetch(API_ENDPOINT.POST_REVIEW, option);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default restaurantDbSource;
