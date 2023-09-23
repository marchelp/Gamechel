import GameDataSource from '../data/data-source.js';
import './game-item.js';

class GameList extends HTMLElement {
    constructor() {
        super();
        this.currentPage = 1;
    }

    set games(games) {
        this._games = games;
        this._render();
    }

    renderError(message) {
        this.innerHTML = `
        <style>
            .error-message {
                color: red;
                font-weight: bold;
            }
        </style>
        <p class="error-message">${message}</p>
        `;
    }

    _render() {
        this.innerHTML = `
        <style>
            game-list {
                margin-top: 80px;
                display: flex;
                gap: 30px;
                padding: 10px 20px;
                flex-wrap: wrap;
                justify-content: space-evenly;
            }

            h2 {
                display: block;
                font-size: 1.5rem;
                margin-bottom: 20px;
                text-align: center;
                color: rgba(203, 200, 200, 0.5);
                flex-basis: 100%;
            }
            
            .button-container {
                order: 2;
                flex-basis: 100%;
                margin-top: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            button {
                padding: 10px 20px;
                background-color: #27292a;
                color: white;
                border-radius: 20px;
                border: none;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                cursor: pointer;
            }

            button:hover {
                font-weight: bold;
            }
        </style>
        <h2>Temukan Informasi Game di Gamechel!</h2>
        <div class="button-container">
            <button id="loadMoreButton" class="load-more-button">Tampilkan game lainnya</button>
        </div>
        `;

        const loadMoreGameBtn = this.querySelector('.load-more-button');

        loadMoreGameBtn.addEventListener('click', async () => {
            try {
                const results = await GameDataSource.loadMoreGames(this.currentPage);
                
                if (results.length > 0) {
                    this._games = [...this._games, ...results];
                    this.currentPage++;
                } else {
                    this.renderError("Tidak ada game lain yang tersedia.");
                }
            } catch (error) {
                this.renderError(error);
            }

            this._render();
        });

        this._games.forEach(game => {
            const gameItemElement = document.createElement('game-item');
            gameItemElement.game = game;
            this.appendChild(gameItemElement);
        });
    }
}

customElements.define('game-list', GameList);