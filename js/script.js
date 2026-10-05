const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    respuesta.textContent = 'Pregunta enviada correctamente. ¡Gracias por contactarnos!';
    respuesta.style.color = 'green';

    formulario.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentIndex = 0;
  const cards = track ? track.querySelectorAll('.card__content') : [];
  const totalCards = cards.length;
  let autoPlayTimer;

  function scrollToCard(index) {
    if (!track || cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth; // Mide correctamente la primera tarjeta activa
    track.scrollLeft = cardWidth * index;
    currentIndex = index;
  }

  function startAutoPlay() {
    if (totalCards <= 1) return;
    autoPlayTimer = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= totalCards) nextIndex = 0;
      scrollToCard(nextIndex);
    }, 4000); // Avanza cada 4 segundos
  }

  function stopAutoPlay() {
    clearInterval(autoPlayTimer);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoPlay();
      let nextIndex = (currentIndex + 1) >= totalCards ? 0 : currentIndex + 1;
      scrollToCard(nextIndex);
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoPlay();
      let prevIndex = (currentIndex - 1) < 0 ? totalCards - 1 : currentIndex - 1;
      scrollToCard(prevIndex);
      startAutoPlay();
    });
  }

  if (track) {
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
});

