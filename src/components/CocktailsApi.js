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

  async getRecentCocktails() {
    return this._request("/recent.php");
  }

  async searchCocktailByName(name) {
    return this._request(`/search.php?s=${name}`);
  }

  async listCocktailsByFirstLetter(letter) {
    return this._request(`/search.php?f=${letter}`);
  }

  async searchIngredientByName(name) {
    return this._request(`/search.php?i=${name}`);
  }

  async lookupCocktailById(id) {
    return this._request(`/lookup.php?i=${id}`);
  }

  async lookupIngredientById(id) {
    return this._request(`/lookup.php?iid=${id}`);
  }

  async getRandomCocktail() {
    return this._request(`/random.php`);
  }

  async searchByIngredient(ingredient) {
    return this._request(`/filter.php?i=${ingredient}`);
  }

  async filterByAlcoholic(alcoholic) {
    return this._request(`/filter.php?a=${alcoholic}`);
  }

  async filterByCategory(category) {
    return this._request(`/filter.php?c=${category}`);
  }

  async filterByGlass(glass) {
    return this._request(`/filter.php?g=${glass}`);
  }

  async listCategories() {
    return this._request(`/list.php?c=list`);
  }

  async listGlasses() {
    return this._request(`/list.php?g=list`);
  }

  async listIngredients() {
    return this._request(`/list.php?i=list`);
  }

  async listAlcoholicFilters() {
    return this._request(`/list.php?a=list`);
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
