/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({
  I,
}) => {
  I.amOnPage('/');

  I.click(locate('.card h3 a').at(3));
});

Scenario('Review a Restaurant', async ({
  I,
}) => {
  const date = Date.now();
  const name = `Anto, review at ${date}`;
  const review = `review content at ${date}`;

  I.wait(3);
  I.seeElement('.reviewPost');

  I.wait(3);
  I.fillField('.nameInput', name);
  I.fillField('.reviewInput', review);
  I.click('#reviewButton');

  I.amOnPage('/');
  I.click(locate('.card h3 a').at(3));

  I.wait(3);
  const newName = await I.grabTextFrom(locate('.review-container .reviewName').last());
  const newReview = await I.grabTextFrom(locate('.review-container .reviewCustomer').last());

  I.wait(3);
  assert.strictEqual(`Costumer : ${name} `, newName);
  assert.strictEqual(`Review : ${review} `, newReview);
});
