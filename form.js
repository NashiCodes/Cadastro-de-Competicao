document.cadastro.addEventListener("submit", submitListener);
function submitListener(event) {
  event.preventDefault();

  document.cadastro.reset();
}
