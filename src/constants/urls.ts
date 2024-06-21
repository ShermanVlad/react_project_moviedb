export const baseURL: string = 'https://api.themoviedb.org/3';

export const urls = {
    getAllMovies: '/discover/movie',
    getById: '/movie',
    getGenres: '/genre/movie/list',
    getSearchedMovies: '/search/movie'
}

     // --url 'https://api.themoviedb.org/3/search/collection?query=inside&include_adult=false&language=en-US&page=1' \
     // --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzk3NTViZDI3YzhkM2FiY2VkNmNjYTE4ODM1NDA3MSIsInN1YiI6IjY2NzAzMzhiOTM3ZGQwNzYzMjk4MmJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bUIuHW8tzn8cr42zzsql4sCCaj7dv1l_g-rkKK85-_0' \
     // --header 'accept: application/json'