// В змінну задаємо ключ API який получили при реєстрації
const API_KEY =
  'live_1SLi0nwDKLs9tE67PgHRv7wAvhwYEp2lyKt4wusq54NRJSTrg81S8J9zXoQW5oKl';

// Робимо HTTP запит до ресурсу
export function fetchBreeds() {
  const URL = 'https://api.thecatapi.com/v1/breeds';

  // Отримуємо список порід котів з значенням нашого ключа
  return (
    fetch(URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    })
      //Після запиту повертається проміс с сервера. Обробляємо відповідь та перетворюємо в json формат
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch breeds');
        }
        return response.json();
      })
      // Перебераємо та витягуємо з оюєктів що нам потрібно
      .then(data => {
        return data.map(breed => ({
          id: breed.id,
          name: breed.name,
        }));
      })
  );
}

// Робимо HTTP запит до ресурсу з значенням breedId щоб отримати інфу про кота
export function fetchCatByBreed(breedId) {
  const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  // Получаємо список з значенням нашого ключа
  return (
    fetch(URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cat');
        }
        return response.json();
      })
      // Обробляємо та повертаємо тіки першийобєкт з масиву
      .then(data => {
        return data[0];
      })
  );
}
