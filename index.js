const rating_cards = document.querySelectorAll(".ratings .spn");
const submit_btn = document.querySelector(".submit-btn");
const rate_point = document.getElementById("rate");
const rating_section = document.querySelector(".rating-section");
const thank_section = document.querySelector(".thank-section");

let rate = null;

rating_cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const selectedCard = e.target;
    selectedCard.classList.add("checked");
    rate = selectedCard.innerText;
  });
});

submit_btn.addEventListener("click", () => {
  if (rate) {
    rate_point.innerText = rate;
    rating_section.classList.add("hidden");
    thank_section.classList.remove("hidden");
  }
});
