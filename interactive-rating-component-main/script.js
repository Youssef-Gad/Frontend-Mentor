let rateNum = document.querySelectorAll(".rate-num");
let submitBtn = document.querySelector(".btn");
let rateText = document.querySelector(".rate-text");
let activeComponent = document.querySelector(".active-state");
let thankYouComponent = document.querySelector(".thank-you-state");
let rate;

rateNum.forEach((num) => {
  num.addEventListener("click", (e) => {
    rate = num.innerHTML;
    rateText.innerHTML = `You selected ${rate} out of 5`;
    rateNum.forEach((rate) => rate.classList.remove("active"));
    num.classList.add("active");
  });
});

submitBtn.addEventListener("click", () => {
  if (rate === undefined) alert("Please Choose Rating!");
  else {
    activeComponent.style.display = "none";
    thankYouComponent.style.display = "block";
  }
});
