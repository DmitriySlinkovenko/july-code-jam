class Card {
  constructor(data, templateSelector) {
    this._title = data.title || data.strDrink;
    this._imageLink = data.imageLink || data.strDrinkThumb;
    this._templateSelector = templateSelector;
    this._id = data._id || data.idDrink;
    this._isLiked = data.isLiked;
    this._ingr1 =
      data.ingredient1 ||
      data.strIngredient1 +
        "-" +
        (data.strMeasure1 == null ? "" : data.strMeasure1);
    this._ingr2 =
      data.ingredient2 ||
      data.strIngredient2 +
        "-" +
        (data.strMeasure2 == null ? "" : data.strMeasure2);
    this._ingr3 =
      data.ingredient3 ||
      (data.strIngredient3 == null ? "" : data.strIngredient3) +
        (data.strMeasure3 == null ? "" : "-" + data.strMeasure3);
    this._ingr4 =
      data.ingredient4 ||
      (data.strIngredient4 == null ? "" : data.strIngredient4) +
        (data.strMeasure4 == null ? "" : "-" + data.strMeasure4);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.firstElementChild.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardBackTitle = this._element.querySelector("#card-back-title");
    this._ing1 = this._element.querySelector("#ingr1");
    this._ing2 = this._element.querySelector("#ingr2");
    this._ing3 = this._element.querySelector("#ingr3");
    this._ing4 = this._element.querySelector("#ingr4");
    this._cardImage.src = this._imageLink;
    this._cardTitle.textContent = this._title;
    this._cardBackTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._ing1.textContent = this._ingr1;
    this._ing2.textContent = this._ingr2;
    this._ing3.textContent = this._ingr3;
    this._ing4.textContent = this._ingr4;
    return this._element;
  }
}

export default Card;
