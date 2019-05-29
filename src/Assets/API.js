// TMDb API URLs
const key = process.env.REACT_APP_TMDb_API_KEY;

// get TMDb api image configurations
fetch(`//api.themoviedb.org/3/configuration?api_key=${key}`)
  .then(res => res.json())
  .then(data => {
    // console.log(data.images.poster_sizes);
    tmdb.imgURL = data.images.secure_base_url;
    tmdb.posterSizes = data.images.poster_sizes;
    tmdb.p_retina = tmdb.posterSizes[5];
    tmdb.p_default = tmdb.posterSizes[4];
  });

const tmdb = {
  tmdb : 'https://www.themoviedb.org/?',
  tmdbURL: 'https://api.themoviedb.org/3',
  configuration: `configuration?api_key=${key}`,
  nowPlaying: `movie/now_playing?api_key=${key}`,
  movieSearch : `search/movie?api_key=${key}`,
  language: 'language=',
  page: 'page=',
  region: 'region=',
  query: 'query='
};

console.log('tmdb api urls', tmdb);

export default tmdb;