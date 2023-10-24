const assert = require('assert');
/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({
  I,
}) => {
  I.amOnPage('/#/like');
});
Scenario('showing empty liked restaurants', ({
  I,
}) => {
  I.see('There is No Favorite Restaurant', '.card-content');
});

Scenario('liking one restaurant', async ({
  I,
}) => {
  I.see('There is No Favorite Restaurant', '.card-content');
  I.amOnPage('/');

  I.wait(3);
  I.seeElement('.card h3 a');
  const firstResto = locate('.card h3 a').first();
  const TitlefirstResto = await I.grabTextFrom(firstResto);
  I.wait(3);
  I.click(firstResto);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('.card-content');

  I.wait(3);
  const titleLikedResto = await I.grabTextFrom('.card h3 a');

  assert.strictEqual(TitlefirstResto, titleLikedResto);

  I.seeElement('.card h3 a');

  const firstRestoLike = locate('.card h3 a').first();
  const favoriteRestaurantTitle = await I.grabTextFrom(firstRestoLike);
  assert.strictEqual(TitlefirstResto, favoriteRestaurantTitle);

  // Unliking Restaurant Favorite
  I.click(firstRestoLike);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);
  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('.card-content');
  const onFavorite = await I.grabTextFrom('.card-content');
  assert.strictEqual(onFavorite, 'There is No Favorite Restaurant');
});
