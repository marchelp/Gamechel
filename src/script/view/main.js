import '../component/search-bar-app.js';
import '../component/game-list.js';
import GameDataSource from '../data/data-source.js';

const main = () => {
    const gameListElement = document.querySelector('game-list');

    const renderResult = results => {
        gameListElement.games = results;
    };

    const fallbackResult = message => {
        gameListElement.renderError(message);
    };

    GameDataSource.getAllGames()
        .then(renderResult)
        .catch(fallbackResult);

    const searchElement = document.querySelector('search-bar-app');

    const onButtonSearchClicked = async () => {
        try {
            const result = await GameDataSource.searchGame(searchElement.value);
            renderResult(result);

            const loadMoreButton = document.getElementById('loadMoreButton');
            if (loadMoreButton) {
                loadMoreButton.disabled = true;
                loadMoreButton.setAttribute('hidden', 'true');
            }

            gameListElement.id = 'gameList';
            const gameList = document.getElementById('gameList');
            gameList.scrollIntoView({ behavior: 'smooth' });

        } catch (message) {
            fallbackResult(message);
        }
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;