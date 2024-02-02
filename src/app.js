document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      const isActive = faq.classList.toggle("active");

      const plusIcon = question.querySelector(".plus-icon");
      const minusIcon = question.querySelector(".minus-icon");

      if (isActive) {
        plusIcon.classList.add("visible");
        minusIcon.classList.remove("hidden");
      } else {
        plusIcon.classList.remove("visible");
        minusIcon.classList.add("hidden");
      }
    });
  });
});
// <span><i class="fa-solid fa-minus minus-icon"></i></span>
