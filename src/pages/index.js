import "../pages/index.css";

const card = document.querySelector(".card");

const cardToggle = () => {
  card.classList.toggle = "card__animation";
};

card.addEventListener("click", cardToggle);
