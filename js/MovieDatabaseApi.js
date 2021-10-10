class MovieDatabaseApi {
    apiKey = '3d7970c970b99f46c7086405048a295a'
    search = '';
    searchResult = [];
    searchResultLimit = 12;
    movieDefaultPoster = 'assets/icons/icon-512x512.png'

    constructor(search) {
        this.search = search;
    }

    getSearchUrl() {
        return `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.search}`;
    }

    async fetchMovies() {
        this.searchResult = await fetch(this.getSearchUrl()).then((res) => res.json());
    }

    displayMovies() {
        this.fetchMovies().then(() => {
            this.searchResult.results.length = this.searchResultLimit;
            result.innerHTML = this.searchResult.results.map(
                (movie) =>
                    this.getMovieTemplate(movie)
            ).join('');
        });
    }

    getMovieTemplate(movie) {
        let img_path = (movie.poster_path != null) ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : this.movieDefaultPoster;
        return `
    <li>
      <h2>${movie.original_title}</h2> 
      <div class="card-content">
        <img src="${img_path}" />
        <div class="infos">
          <p>${movie.overview}</p>
          <p>Popularité : ${movie.popularity} ⭐</p>
        </div>
      </div>
    </li>
    `;
    }
}
