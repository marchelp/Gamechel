import _ from 'lodash';

class GameItem extends HTMLElement {
  constructor() {
    super();
  }

  set game(game) {
    this._game = game;
    this.render();
  }

  render() {
    const game = this._game;

    if (game) {
      const platformNames = _.map(game.platforms, 'platform.name').join(", ");
      const genreList = _.map(game.genres, genre => `<u>${genre.name}</u>`).join(", ");
      this.innerHTML = `
      <style>
        body {
          color: white;
        }

        game-item {
          color: white;
          width: 340px;
          padding: 20px 20px 10px;
          background-color: #27292a;
          border-radius: 20px;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          transition: .5s;
        }

        game-item:hover {
          transform: scale(1.1);
        }

        img {
          width: 300px;
          border-radius: 10px;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }

        h4 {
          margin: 10px 0;
          font-size: 1.3rem;
        }

        p {
          font-size: .8rem
        }

        .platforms {
          color: rgb(114, 113, 113);
        }

        i {
          margin-right: 5px;
        }

        .bi-calendar-event-fill {
          color: #FF7F50;
        }

        .bi-star-fill {
          color: yellow;
        }

      </style>
        <div class="game-item">
          <img src="${game.background_image}" alt="${game.name}">
          <h4>${game.name}</h4>
          <p class="platforms">${platformNames}</p>
          <p class="genre">Genre: ${genreList}</p>
          <hr/>
          <p><i class="bi bi-calendar-event-fill"></i> ${game.released}</p>
          <hr/>
          <p><i class="bi bi-star-fill"></i> ${game.rating}</p>
        </div>
      `;
    } else {
      this.innerHTML = `
        <div class="game-item">
          <p>Tidak ada data yang tersedia.</p>
        </div>
      `;
    }
  }
}

customElements.define('game-item', GameItem);