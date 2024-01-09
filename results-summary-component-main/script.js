let sumaryCard = document.querySelector(".summary-cards");
let btn = document.createElement("button");

btn.classList.add("btn");
btn.innerHTML = `Continue`;

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((e) => {
      let card = document.createElement("div");
      let cardDiv = document.createElement("div");
      let img = document.createElement("img");
      let category = document.createElement("p");
      let scoreText = document.createElement("p");

      card.classList.add("card");
      card.classList.add(`${e.category.toLowerCase()}-card`);
      category.classList.add("card-title");

      img.src = e.icon;
      img.alt = `${e.category} Icon`;

      category.innerHTML = `${e.category}`;
      scoreText.innerHTML = `<span>${e.score}</span> / 100`;

      cardDiv.appendChild(img);
      cardDiv.appendChild(category);

      card.appendChild(cardDiv);
      card.appendChild(scoreText);

      sumaryCard.appendChild(card);
      sumaryCard.appendChild(btn);
    });
  });
