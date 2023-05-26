// https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_1SLi0nwDKLs9tE67PgHRv7wAvhwYEp2lyKt4wusq54NRJSTrg81S8J9zXoQW5oKl

const URL =
  'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_1SLi0nwDKLs9tE67PgHRv7wAvhwYEp2lyKt4wusq54NRJSTrg81S8J9zXoQW5oKl';
const API_KEY =
  'live_1SLi0nwDKLs9tE67PgHRv7wAvhwYEp2lyKt4wusq54NRJSTrg81S8J9zXoQW5oKl';

function onSearchKatze(query) {
  return fetch(`${URL}?apiKey=${API_KEY}&katze=${query}`).then(res =>
    res.json()  
  );
}

export default { onSearchKatze };

const BASE_URL = 'https://restcountries.com/v3.1/name';
const PARAMS = 'name,capital,population,flags,languages';

export default function fetchCountries(name) {
  return fetch(`${BASE_URL}/${name}?fields=${PARAMS}`).then(response => {
    if (response.ok) {
      return response.json();
    }
                throw new Error(response.status);
  });
}
