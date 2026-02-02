
const apiUrl = import.meta.env.VITE_API_URL;



const Request = {
    fetchTrending: `${apiUrl}/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${apiUrl}/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_networks=213`,
    fetchTopRated: `${apiUrl}/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
    fetchActionMovies: `${apiUrl}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=28`,
    fetchComedyMovies: `${apiUrl}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${apiUrl}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${apiUrl}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${apiUrl}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=99`
}

export default Request
