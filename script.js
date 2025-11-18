
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  
  cards.forEach(card => {
    const delay = card.getAttribute("data-delay") || 0;
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }, delay);
  });
});
