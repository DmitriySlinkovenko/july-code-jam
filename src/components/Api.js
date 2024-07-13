export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._header = headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return this._request(`${this._url}`, {
      headers: this._header,
    });
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
    return this._request(`${this._url}/items`, {
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
    });
  }

  //   likeCard(id) {
  //     return this._request(`${this._url}/cards/${id}/likes`, {
  //       method: "PUT",
  //       headers: this._header,
  //     });
  //   }
}
