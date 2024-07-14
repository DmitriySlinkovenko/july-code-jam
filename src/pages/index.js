import "../pages/index.css";
import Card from "../components/Card";
import Section from "../components/Section";
import AddCardForm from "../components/Form";
import cocktailApi from "../components/CocktailsApi";
import FormValidator from "../components/FormValidator";
import logo1 from "../images/logo-mixlist.png";
import logoDark from "../images/logo-mixlist-night.png";

// Constants

const addCocktailBtn = document.querySelector(".nav__button");
const addModal = new AddCardForm("#add-card-modal", handleAddFormSubmit);
const refreshBtn = document.querySelector(".card__refresh-button");
const logo = document.getElementById("header-logo");
const body = document.body;
const navLink = document.querySelectorAll(".nav__link");
const navBtn = document.querySelector(".nav__button");

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// Event Listeners

addModal.setEventListeners();
const addCardFormValidator = new FormValidator(validationConfig, addModal.form);
addCardFormValidator.enableValidation();

addCocktailBtn.addEventListener("click", () => {
  addModal.open();
});

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

refreshBtn.addEventListener("click", () => {
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
});

// Cards loading logic

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

// Adding cards logic

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
    })
    .catch((err) => console.error("Error adding new card", err));
}
