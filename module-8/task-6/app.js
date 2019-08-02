{ /* <div class="movie">
  <img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">

  <div class="movie__body">
    <h2 class="movie__title">The Godfather</h2>
    <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
      would-be killers, launching a campaign of bloody revenge.</p>

    <p class="movie__date">Released: 1972-03-14</p>
    <p class="movie__rating">Rating: 8.6</p>
  </div>
</div> */ }

const movieCard = {
  src: 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
  alt: 'movie image',
  title: 'The Godfather',
  description: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of thewould-be killers, launching a campaign of bloody revenge.',
  date: 'Released: 1972-03-14',
  rating: 'Rating: 8.6',
};

const createMovieCard = (obj) => {
  const movie = document.createElement('div');
  movie.classList.add('movie');

  const img = document.createElement('img');
  img.classList.add('movie__image');
  img.setAttribute('src', obj.src);
  img.setAttribute('alt', obj.alt);

  const body = document.createElement('div');
  body.classList.add('movie__body');
  const title = document.createElement('h2');
  title.classList.add('movie__title');
  title.textContent = obj.title;
  const description = document.createElement('p');
  description.classList.add('movie__description');
  description.textContent = obj.description;
  const date = document.createElement('p');
  date.classList.add('movie__date');
  date.textContent = obj.date;
  const rating = document.createElement('p');
  rating.classList.add('movie__rating');
  rating.textContent = obj.rating;

  body.append(title, description, date, rating);
  movie.append(img, body);
  document.body.appendChild(movie);
};

createMovieCard(movieCard);
