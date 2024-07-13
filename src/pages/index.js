import "../pages/index.css";
import Api from "../components/CocktailsApi";
import Card from "../components/Card";
import Section from "../components/Section";
import AddCardForm from "../components/Form";

const addForm = document.forms[".form"];
const saveButton = document.querySelector(".form__save-button");
const addCocktailBtn = document.querySelector(".nav__button");
const addModal = new AddCardForm("#add-card-modal", handleAddFormSubmit);

addCocktailBtn.addEventListener("click", () => {
  addModal.open();
});

addModal.setEventListeners();

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

api
  .getInitialCards()
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

function handleAddFormSubmit() {
  api
    .addCard({
      title,
      imageLink,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
    })
    .then((data) => {
      const newCard = createCard(data);
      cardSection.addItem(newCard);
    });
}
