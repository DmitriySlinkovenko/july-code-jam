export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._header = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}`, {
      headers: this._header,
    }).then((res) => this._checkResponse(res));
  }

  addCard({
    title,
    imageLink,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6,
  }) {
    return fetch(`${this._url}/items`, {
      method: "POST",
      headers: this._header,
      body: JSON.stringify({
        title: title,
        imageLink: imageLink,
        ingredient1: ingredient1,
        ingredient2: ingredient2,
        ingredient3: ingredient3,
        ingredient4: ingredient4,
        ingredient5: ingredient5,
        ingredient6: ingredient6,
      }),
    }).then((res) => this._checkResponse(res));
  }

  //   likeCard(id) {
  //     return fetch(`${this._url}/cards/${id}/likes`, {
  //       method: "PUT",
  //       headers: this._header,
  //     }).then((res) => this._checkResponse(res));
  //   }
}
