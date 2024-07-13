import "../pages/index.css";
import Api from "../components/Api";
import Card from "../components/Card";
import Section from "../components/Section";

const addCocktailBtn = document.querySelector(".nav__button");
const addModal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__close-button");
addCocktailBtn.addEventListener("click", () => {
  addModal.classList.add("modal_opened");
});
closeModalBtn.addEventListener("click", () => {
  addModal.classList.remove("modal_opened");
});

const api = new Api({
  baseUrl: "https://localhost:27017/items",
  headers: {
    "Content-Type": "application/json",
  },
});

function createCard(data) {
  const card = new Card(data, "#card-template", likeButton);
  return card.generateCard();
}

let cardSection;

api.getInitialCards
  .then((res) => {
    cardSection = new Section(
      {
        items: res,
        renderer: (cardData) => {
          const card = createCard(cardData);
          cardSection.addItem(card);
        },
      },
      ".card__container"
    );
    cardSection.renderItems();
  })
  .catch((err) => console.error("Error fetching initial cards", err));
