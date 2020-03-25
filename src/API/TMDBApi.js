const API_TOKEN = "daaa6a66008fdbe1a6e9e2170a280398";
 
  export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }
  export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }