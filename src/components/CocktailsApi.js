const baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async getInitialCards() {
    return fetch(`${baseUrl}/randomselection.php`).then((res) =>
      this._checkResponse(res)
    );
  }

  getSavedCards() {
    return fetch(`http://127.0.0.1:3003/items`).then((res) =>
      this._checkResponse(res)
    );
  }

  addCard({
    title,
    imageLink,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
  }) {
    return fetch("http://127.0.0.1:3003/items", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        title,
        imageLink,
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
      }),
    }).then((res) => this._checkResponse(res));
  }
}

// API INIT
const cocktailApi = new Api({
  baseUrl: `${baseUrl}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default cocktailApi;
