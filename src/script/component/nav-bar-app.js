class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        .image-hero {
            text-align: center;
            position: relative;
            margin-bottom: 50px;
        }

        .text-hero-container {
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 0 20px;
            text-align: center;
            color: white;
            z-index: 1;
        }

        .text-hero-container h1 {
            font-size: 3.5rem;
            padding-top: 2em;
            font-weight: bold;
            color: rgba(255, 255, 255, .9);
            text-shadow: 2px 2px 5px black;
        }
        
        .text-hero-container a {
            color: white;
            text-decoration: none;
            text-shadow: 2px 2px 5px black;
        }

        .text-hero-container a:hover {
            font-weight: bold;
            text-decoration: underline;
            font-size: 1.2rem;
        }

        .carousel-item img {
            height: 60vh;
            object-fit: cover;
        }

        @media screen and (max-width: 550px) {
            .text-hero-container h1 {
                font-size: 3rem;
            }
        }
        </style>
        
        <div id="carouselExampleRide" class="carousel slide image-hero" data-bs-ride="true">
            <div class="text-hero-container">
                <h1>Welcome to Gamechel</h1>
                <a href="#content">Jelajahi Beragam Game! <br />
                    <i class="bi bi-arrow-down-circle-fill"></i>
                </a>
            </div>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img src="https://w.wallhaven.cc/full/x8/wallhaven-x8or3o.png" class="d-block w-100" alt="Hero-Image">
                </div>
                <div class="carousel-item active">
                    <img src="https://w.wallhaven.cc/full/kw/wallhaven-kwey6m.jpg" class="d-block w-100" alt="Hero-Image">
                </div>
                <div class="carousel-item">
                    <img src="https://w.wallhaven.cc/full/3k/wallhaven-3kqojv.jpg" class="d-block w-100" alt="Hero-Image">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev"
                fdprocessedid="bcbgr7">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next"
                fdprocessedid="n4rqe5">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        `;
    }
}

customElements.define('nav-bar-app', NavBar);
