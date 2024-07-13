export default class AddCardForm {
  constructor(formModal) {
    this.formModal = document.querySelector(formModal);
    this._closeButton = document.querySelector(".modal__close-button");
  }

  open() {
    this.formModal.classList.add("modal_opened");
  }

  close() {
    this.formModal.classList.remove("modal_opened");
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
