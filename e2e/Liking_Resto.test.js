/* eslint-disable no-undef */
/* eslint-disable new-cap */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const emptylikeRestoText = 'Daftar Favorit Kosong';
// skenario menampilkan restoran kosong
Scenario('showing empty like restaurant', ({ I }) => {
  I.seeElement('#restaurants');
  I.see(emptylikeRestoText, '#restaurants');
});

// skenario menyukai satu restoran
// const firstRestaurant = "Melting Pot";
Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptylikeRestoText, '#restaurants');

  I.amOnPage('/');
  I.seeElement('.title_name'); // Assuming 'title_name' is a class name
  const firstResto = locate('.title_name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.contents');
  const likedTitle = await I.grabTextFrom(firstResto);
  assert.strictEqual(firstRestoTitle, likedTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptylikeRestoText, '#restaurants');
  I.amOnPage('/');
  I.seeElement('.title_name'); // Assuming 'title_name' is a class name
  const firstResto = locate('.title_name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.title_name'); // Assuming 'title_name' is a class name

  const unlikedRestoTitle = await I.grabTextFrom('.title_name'); // Assuming 'title_name' is a class name
  assert.strictEqual(firstRestoTitle, unlikedRestoTitle);
  I.seeElement('.title_name'); // Assuming 'title_name' is a class name
  await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see(emptylikeRestoText, '#restaurants');
});
