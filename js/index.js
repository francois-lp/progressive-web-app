// launch our serviceWorker with its directives if in the browser there is a serviceWorker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("js/serviceWorker.js");
}

// listener of search form submit event 
const form = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // search and display movies
    (new MovieDatabaseApi(searchInput.value)).displayMovies();
});
