document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });
});

//margin: 0 auto;//
//display: flex;
//flex-direction: column;

//margin-top: 20px;
//margin-bottom: 12px;
