class FooterApp extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                .container-footer {
                    color: white;
                    background-color: #27292a;
                    margin-top: 50px;
                    padding: 1px;
                    text-align: center;
                    font-size: 1rem;
                }

                @media screen and (max-width: 550px) {
                    .container-footer {
                        font-size: .8rem;
                    }
                }
            </style>
            
            <div class="container-footer">
                <p>&copy; 2023 Gamechel. Segala hak cipta dilindungi.</p>
            </div>
        `;
    }
}

customElements.define('foot-app', FooterApp);