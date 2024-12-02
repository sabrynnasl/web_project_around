
// Selecionando os elementos
const modal = document.getElementById('editProfileModal');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.profile__modal-content-close');

// Mostrar o modal

addButton.addEventListener('click', () => {
  modal.classList.add('show');
  console.log("OI")
});

// Fechar o modal ao clicar no "X"
closeButton.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});