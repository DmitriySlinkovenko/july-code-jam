export default class AddCardForm {
  constructor(formModal, handleAddFormSubmit) {
    this.formModal = document.querySelector(formModal);
    this.form = this.formModal.querySelector(".form");
    this.handleAddFormSubmit = handleAddFormSubmit;
    this._closeButton = document.querySelector(".modal__close-button");
    this._saveButton = document.querySelector(".form__save-button");
    this._inputList = document.querySelectorAll(".form__input");
  }

  open() {
    this.formModal.classList.add("modal_opened");
  }

  close() {
    this.formModal.classList.remove("modal_opened");
  }

  _getInputValues() {
    const cardData = {};
    console.log(this._inputList);
    this._inputList.forEach((input) => {
      cardData[input.name] = input.value;
    });

    return cardData;
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
    this._saveButton.addEventListener("click", () => {
      console.log(this._getInputValues());
    });
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleAddFormSubmit(this._getInputValues());
      this.close();
      this.resetForm();
    });
  }

  resetForm() {
    this.form.reset();
  }
}
