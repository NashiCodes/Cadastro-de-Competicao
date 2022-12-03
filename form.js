const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const enviar = document.querySelector("#enviar");
const junior = document.querySelector("#ulJunior");
const master = document.querySelector("#ulMaster");
const senior = document.querySelector("#ulSenior");

enviar.addEventListener("click", submitListener);

function submitListener(event) {
  event.preventDefault();

  if (nome.value != "" && idade.value != "") {
    criaCadastro(nome, idade);
  }
  else
    window.alert("Campo de cadastro incompleto!!!");

  nome.value = "";
  idade.value = "";
}

function criaCadastro(nome, idade) {
  const item = document.createElement("li");
  item.textContent = `${nome.value}, ${idade.value}`;
  if (idade.value < 18) {
    junior.appendChild(item);
    return;
  }
  if (idade.value > 40) {
    senior.appendChild(item);
    return;
  }
  master.appendChild(item);
}
