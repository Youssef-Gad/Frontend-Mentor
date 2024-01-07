let questionsBody = document.querySelectorAll(".faq-question-body");
let btns = document.querySelectorAll(".plus-btn");

questionsBody.forEach((q) => {
  q.addEventListener("click", (e) => {
    let answer = q.nextElementSibling;
    let plusBtn = q.firstElementChild.nextElementSibling;
    let minusBtn = q.firstElementChild.nextElementSibling.nextElementSibling;
    if (
      answer.classList.contains("hidden") &&
      answer.classList.contains("faq-answer")
    ) {
      answer.classList.remove("hidden");
      answer.classList.add("active");
      plusBtn.classList.add("hidden");
      minusBtn.classList.remove("hidden");
    } else if (
      answer.classList.contains("active") &&
      answer.classList.contains("faq-answer")
    ) {
      answer.classList.remove("active");
      answer.classList.add("hidden");
      minusBtn.classList.add("hidden");
      plusBtn.classList.remove("hidden");
    }
  });
});
