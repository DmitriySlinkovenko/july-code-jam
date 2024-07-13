import "../pages/index.css";
import Api from "../components/Api";
import Card from "../components/Card";
import ModalWithForm from "../components/ModalWithForm";
import Section from "../components/Section";

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
  .then((cards) => {
    cardSection = new Section(
      {
        items: cards,
        renderer: (cardData) => {
          const card = createCard(cardData);
          cardSection.addItem(card);
        },
      },
      ".card__container"
    );
    cardSection.renderItems();
  })
  .catch((err) => console.error("Error fetching initial cards", error));
