// Script para interação do catálogo
// Abre imagens em modal e permite navegar entre as páginas do catálogo

document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.gallery .thumb img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.getElementById('closeModal');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentIndex = 0;

  // Abre modal com a imagem selecionada
  function openModal(index) {
    currentIndex = index;
    modalImg.src = thumbnails[currentIndex].src;
    modal.classList.remove('hidden');
  }

  // Fecha o modal
  function closeModal() {
    modal.classList.add('hidden');
  }

  // Mostra slide anterior ou seguinte
  function showSlide(index) {
    if (index < 0) {
      index = thumbnails.length - 1;
    }
    if (index >= thumbnails.length) {
      index = 0;
    }
    currentIndex = index;
    modalImg.src = thumbnails[currentIndex].src;
  }

  // Eventos de clique nas miniaturas
  thumbnails.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
  });

  // Botões do modal
  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

  // Fecha modal ao clicar fora da imagem (overlay)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});