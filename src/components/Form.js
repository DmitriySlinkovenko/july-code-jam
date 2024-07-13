export default class AddCardForm {
  constructor(formModal) {
    this.formModal = document.querySelector(formModal);
  }

  open() {
    console.log(this.formModal);
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
