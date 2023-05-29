// Робимо імпорти.
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import './styles.css';
import Notiflix from 'notiflix';

// Звертаємось до елементів html.
const selectElement = document.getElementById('selectElement');
const loaderElement = document.querySelector('.loader');
const errorElement = document.querySelector('.error');
const catInfoElement = document.querySelector('.cat-info');

// Отримаємо списоккотів
fetchBreeds()
  // Приймаємо список з параметром breeds. Створюємо новіелементи.
  .then(breeds => {
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      selectElement.appendChild(option);
    });

    // Робимо слухача подій для вибора породи кота.
    selectElement.addEventListener('change', () => {
      const breedId = selectElement.value;
      showLoader();
      hideError();
      // Запит для полученняінфи про кота.
      fetchCatByBreed(breedId)
        .then(cat => displayCatInfo(cat))
        .catch(error => displayError());
    });

    // Приховуємо завантажувач після завершення отримання списку котів.
    hideLoader();
  })
  .catch(error => {
    displayError();
    hideLoader(); // Приховуємо завантажувач у випадку помилки.
  });

// Робимо видимим елемент на сторінці.
function showLoader() {
  loaderElement.style.display = 'block';
}

// Робимо нивидимим елемент на сторінці.
function hideLoader() {
  loaderElement.style.display = 'none';
}

// Робимо видимою помилку на сторінці.
function displayError() {
  Notiflix.Notify.failure('Сталася помилка. Будь ласка, спробуйте ще раз.');
}

// Робимо нивидимою помилку на сторінці.
function hideError() {
  Notiflix.Notify.remove();
}

// Робимо відображення інфи в елементі catInfoElement та вказуємо в елементи html.
// Побачимо зображення кота, назву породи, опис та темперамент.
function displayCatInfo(cat) {
  loaderElement.innerHTML = '';
  catInfoElement.innerHTML = `
    <img src="${cat.url}" alt="Cat Image">
    <h3>${cat.breeds[0].name}</h3>
    <p>${cat.breeds[0].description}</p>
    <p>Temperament: ${cat.breeds[0].temperament}</p>
  `;
  catInfoElement.style.display = 'block';
}

// function hideCatInfo() {
//   catInfoElement.innerHTML = '';
//   catInfoElement.style.display = 'none';
// }

// // Спочатку приховуємо інформацію про завантажувач, помилку і cat
// hideLoader();
// hideError();
// hideCatInfo();

/**
  |==================================

   // import API from './cat-api.js';

// API.onSearchKatze('katze-all').then(result => console.log(result));

// const refs = {
//   breedSelect: document.querySelector('#selectElement'),
//   catsWrapper: document.querySelector('.cat-info'),
//   loader: document.querySelector('.loader'),
//   error: document.querySelector('.error'),
// };


  |==================================
*/
