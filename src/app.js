document.addEventListener("DOMContentLoaded", function () {
  const faqsContainer = document.querySelector(".faqs-body");

  faqsContainer.addEventListener("click", function (event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains(".faq-icon-icon")) {
      const faqItem = clickedElement.closet(".icons-icons");
      const answer = faqItem.querySelector(".answer");
      const plusIcon = clickedElement.querySelector(".plus-icon");
      const minusIcon = clickedElement.querySelector(".minus-icon");

      answer.classList.toggle("non-aactive");
      plusIcon.classList.toggle("non-active");
      minusIcon.classList.toggle("non-active");
    }
  });
});
