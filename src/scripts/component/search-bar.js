class searchContainer extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchInput').value;
  }

  render() {
    this.innerHTML = `
            <input type="text" class="searchInput" id="searchInput" placeholder="Enter Restaurant Name...." name="Input search restaurant"></input>
            <button class="searchBtn" id="searchBtn" aria-label="Search Button">
                <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
        `;

    this.querySelector('#searchBtn').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-container', searchContainer);
