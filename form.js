function criaCadastro(Nome, idade, nivel) {
  
}
document.cadastro.addEventListener("submit", submitListener);

function submitListener(event) {
  event.preventDefault();
  criaCadastro(
    document.cadastro.Nome.value,
    Number(document.cadastro.idade.value),
    document.cadastro.nivel.value
  )
  document.cadastro.reset();
}
