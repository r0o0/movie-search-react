// TMDb API URLs
const key = process.env.REACT_APP_TMDb_API_KEY;

// get TMDb api image configurations
fetch(`//api.themoviedb.org/3/configuration?api_key=${key}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.images.poster_sizes);
    tmdb.imgURL = data.images.base_url;
    tmdb.posterSizes = data.images.poster_sizes;
    tmdb.p_retina = tmdb.posterSizes[5];
    tmdb.p_default = tmdb.posterSizes[4];
  });

const tmdb = {
  tmdbURL: 'https://api.themoviedb.org/3',
  configuration: `configuration?api_key=${key}`,
  nowPlaying: `now_playing?api_key=${key}`,
  language: 'language=',
  page: 'page=',
  region: 'region='
};

console.log('tmdb api urls', tmdb);

export default tmdb;