
// const apiUrl = import.meta.env.VITE_API_URL;
// const apiKey=import.meta.env.VITE_API_KEY;


// const Request = {
//     fetchTrending: `${apiUrl}/trending/all/week?api_key=${apiKey}&language=en-US`,
//     fetchNetflixOriginals: `${apiUrl}/discover/tv?api_key=${apiKey}&with_networks=213`,
//     fetchTopRelated: `${apiUrl}/movie/top_related?api_key=${apiKey}&language=en-US`,
//     fetchActionMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=28`,
//     fetchComedyMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=35`,
//     fetchHorrorMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=27`,
//     fetchRomanceMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10749`,
//     fetchDocumentaries: `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=99`,
//     fetchTvMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10770`
// }

// export default Request
const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;