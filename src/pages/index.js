import "../pages/index.css";
import Card from "../components/Card";
import Section from "../components/Section";
import AddCardForm from "../components/Form";
import cocktailApi from "../components/CocktailsApi";
import logo1 from "../images/logo-mixlist.png";
import logoDark from "../images/logo-mixlist-night.png";

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
  .getSavedCards()
  .then((res) => {
    let savedCards = { drinks: res };
    cardSection = new Section(
      {
        items: savedCards,
        renderer: (cardData) => {
          const card = createCard(cardData);
          cardSection.addItem(card);
        },
      },
      ".card__container"
    );
    cardSection.renderItems();
  })
  .catch((err) => console.error("Error fetching saved cards", err));

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

const logo = document.getElementById("header-logo");
const body = document.body;
const navLink = document.querySelectorAll(".nav__link");
const navBtn = document.querySelector(".nav__button");

logo.addEventListener("click", () => {
  body.classList.toggle("night-mode");

  if (body.classList.contains("night-mode")) {
    navLink.forEach((link) => {
      link.classList = "nav__link_dark";
    });
    navBtn.classList = "nav__button_dark";
    logo.src = logoDark;
  } else {
    navLink.forEach((link) => (link.classList = "nav__link"));
    navBtn.classList = "nav__button";
    logo.src = logo1;
  }
});
