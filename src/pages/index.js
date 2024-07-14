import "../pages/index.css";
import Card from "../components/Card";
import Section from "../components/Section";
import AddCardForm from "../components/Form";
import cocktailApi from "../components/CocktailsApi";

const addCocktailBtn = document.querySelector(".nav__button");
const addModal = new AddCardForm("#add-card-modal", handleAddFormSubmit);

addCocktailBtn.addEventListener("click", () => {
  addModal.open();
});

addModal.setEventListeners();

function createCard(data) {
  const card = new Card(data, "#card-template");
  return card.generateCard();
}

let cardSection;

cocktailApi
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

function handleAddFormSubmit({
  title,
  imageLink,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
}) {
  cocktailApi
    .addCard({
      title,
      imageLink,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
    })
    .then((data) => {
      const newCard = createCard(data.item);
      cardSection.addItem(newCard);
    });
}
