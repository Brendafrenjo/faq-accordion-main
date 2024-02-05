document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      const activeFaq = document.querySelector(".faq.active");
      if (activeFaq && activeFaq !== faq) {
        activeFaq.classList.remove("active");
      }

      faq.classList.toggle("active");

      const plusIcon = question.querySelector(".plus-icon");
      const minusIcon = question.querySelector(".minus-icon");

      if (faq.classList.contains("active")) {
        plusIcon.style.display("none");
        minusIcon.style.display("inline-block");
      } else {
        plusIcon.style.display("inline-block");
        minusIcon.style.display("none");
      }
    });
  });
});
