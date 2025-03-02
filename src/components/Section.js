export default class Section {
  constructor({ items, renderer }, classSelector) {
    this._items = items.drinks;
    this._renderer = renderer;
    this._container = document.querySelector(classSelector);
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
