function criaCadastro(Nome, idade) {
  if(idade<18){
    const jr = document.createElement("li");
    jr.textContent = `${Nome}, ${idade}`;
    document.ulJunior.appendChild(jr);
  }
  if(idade>40){

  }
}
document.cadastro.addEventListener("submit", submitListener);

function submitListener(event) {
  event.preventDefault();
  criaCadastro(
    document.cadastro.Nome.value,
    Number(document.cadastro.idade.value)
  )
  document.cadastro.reset();
}
