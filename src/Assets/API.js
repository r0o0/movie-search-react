// TMDb API URLs
const key = process.env.REACT_APP_TMDb_API_KEY;

const tmdb = {
  tmdbURL: 'https://api.themoviedb.org/3',
  configuration: `configuration?api_key=${key}`,
  nowPlaying: `now_playing?api_key=${key}`,
  language: 'language=',
  page: 'page=',
  region: 'region='
};

console.log(tmdb);

export default tmdb;