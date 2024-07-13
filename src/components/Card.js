class Card {
  constructor(data, templateSelector, handleLike) {
    this._title = data.title;
    this._imageLink = data.imageLink;
    this._templateSelector = templateSelector;
    this._id = data._id;
    this._handleLike = handleLike;
    this._isLiked = data.isLiked;
    this._ingr1 = data.ingredient1;
    this._ingr2 = data.ingredient2;
    this._ingr3 = data.ingredient3;
    this._ingr4 = data.ingredient4;
    this._ingr5 = data.ingredient5;
    this._ingr6 = data.ingredient6;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", () => {
      this._handleLike(this);
    });
  }

  getId() {
    return this._id;
  }

  setIsLiked(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes();
  }

  isLiked() {
    return this._isLiked;
  }

  _renderLikes() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
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
    this._ing1 = this._element.querySelector("#ingr1");
    this._ing2 = this._element.querySelector("#ingr2");
    this._ing3 = this._element.querySelector("#ingr3");
    this._ing4 = this._element.querySelector("#ingr4");
    this._ing5 = this._element.querySelector("#ingr5");
    this._ing6 = this._element.querySelector("#ingr6");
    this._cardImage.src = this._imageLink;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._ing1.textContent = this._ingr1;
    this._ing2.textContent = this._ingr2;
    this._ing3.textContent = this._ingr3;
    this._ing4.textContent = this._ingr4;
    this._ing5.textContent = this._ingr5;
    this._ing6.textContent = this._ingr6;
    this._setEventListeners();
    this._renderLikes();
    return this._element;
  }
}

export default Card;
