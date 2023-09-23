class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._searchEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
    
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            max-width: 80%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 10px 20px;
            border-radius: 50px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: #27292a;
            margin: 20px auto;
            z-index: 999;
        }
        
        .search-container > input {
            width: 75%;
            border-radius: 50px;
            padding: 16px;
            border: 0;
            background-color: #27292a;
            color: white;
            font-size: 1rem;
        }

        .search-container > input:focus {
            outline: 0;
        }

        .search-container > input:focus::placeholder {
            font-weight: bold;
        }

        .search-container > input::placeholder {
            font-weight: normal;
        }

        .search-container > button {
            width: 20%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #FF7F50;
            color: white;
            border: 0;
            text-transform: uppercase;
            border-radius: 50px;
        }
        
        @media screen and (max-width: 550px) {
            .search-container {
                flex-direction: column;
                position: static;
            }

            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
            
            .search-container > button {
                width: 100%;
            }
        }
        </style>

        <div id="search-container" class="search-container">
            <input placeholder="Cari game yang kamu inginkan" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM
            .querySelector('#searchButtonElement')
            .addEventListener('click', this._searchEvent);
    }
}

customElements.define("search-bar-app", SearchBar);