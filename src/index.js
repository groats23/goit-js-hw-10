import API from './cat-api.js';

API.onSearchKatze('katze-all').then(result => console.log(result));

const refs = {
  breedSelect: document.querySelector('#selectElement'),
  catsWrapper: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

refs.error.classList.add('is-hidden');
showLoader(refs.breedSelect);
