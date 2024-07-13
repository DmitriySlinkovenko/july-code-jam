export default class AddCardForm {
  constructor(formModal, handleAddFormSubmit) {
    this.formModal = document.querySelector(formModal);
    this.handleAddFormSubmit = handleAddFormSubmit;
    this._closeButton = document.querySelector(".modal__close-button");
    this._saveButton = document.querySelector(".form__save-button");
    this._inputList = document.querySelector(".form__input");
  }

  open() {
    this.formModal.classList.add("modal_opened");
  }

  close() {
    this.formModal.classList.remove("modal_opened");
  }

  _getInputValues() {
    const cardData = {};
    this._inputList.forEach((input) => {
      cardData[input.name] = input.value;
      cardData[input.ingredient] = input.ingredient;
    });

    return cardData;
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
    this._saveButton.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleAddFormSubmit(_getInputValues());
    });
  }

  resetForm() {
    this.formModal.reset();
  }
}
