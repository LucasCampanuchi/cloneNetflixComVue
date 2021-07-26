const axios = require('axios');

const API_KEY = 'c1eb597ffe011f3a1f44feea0c1e430c';
const API_BASE = 'https://api.themoviedb.org/3';


async function getHomeList(){
    return [
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await axios.get(`${API_BASE}/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await axios.get(`${API_BASE}/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Originais do Netflix',
            items: await axios.get(`${API_BASE}/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await axios.get(`${API_BASE}/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await axios.get(`${API_BASE}/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await axios.get(`${API_BASE}/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await axios.get(`${API_BASE}/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Terror',
            items: await axios.get(`${API_BASE}/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        }
    ]
    
}

getHomeList().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

export default getHomeList;


