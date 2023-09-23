import axios from 'axios';
import { APIKEY } from '../api/apiKey.js';

class GameDataSource {
    static baseUrl = 'https://api.rawg.io/api/games';
    static initialDate = '2000-01-01';
    static currentDate = new Date().toISOString().split('T')[0];

    static getAllGames() {
        const params = {
            key: APIKEY,
            dates: `${GameDataSource.initialDate},${GameDataSource.currentDate}`,
            ordering: '-added',
        };

        return axios
            .get(GameDataSource.baseUrl, { params })
            .then((response) => response.data.results)
            .catch((error) => {
                console.error('Error fetching data:', error);
                throw error;
            });
    }

    static searchGame(keyword) {
        const params = {
            key: APIKEY,
            search: keyword,
            dates: `${GameDataSource.initialDate},${GameDataSource.currentDate}`,
            ordering: '-added',
        };

        return axios
            .get(GameDataSource.baseUrl, { params })
            .then((response) => {
                if (response.data.results) {
                    return response.data.results;
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
            .catch((error) => {
                console.error('Error searching for games:', error);
                throw error;
            });
    }

    static loadMoreGames(page) {
        const params = {
            key: APIKEY,
            dates: `${GameDataSource.initialDate},${GameDataSource.currentDate}`,
            ordering: '-added',
            page: page+1,
        };

        return axios
            .get(GameDataSource.baseUrl, { params })
            .then((response) => response.data.results)
            .catch((error) => {
                console.error('Error fetching more data:', error);
                throw error;
            });
    }
}

export default GameDataSource;