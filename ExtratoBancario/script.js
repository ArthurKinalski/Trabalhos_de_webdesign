const form = document.querySelector("#form");
const campoDesc = document.querySelector("#desc");
const campoValor = document.querySelector("#valor");
const campoTipo = document.querySelector("#tipo");
const listIn = document.querySelector("#list-in");
const listOut = document.querySelector("#list-out");
const colunas = document.querySelector(".columns");
const saldoEl = document.querySelector("#saldo");

function formatar(n) {
  const moeda = n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return moeda;
}

function somar(lista) {
  let total = 0;
  lista.querySelectorAll("li").forEach((li) => {
    total += Number(li.dataset.valor);
  });
  return total;
}

function atualizarSaldo() {
  const saldo = somar(listIn) - somar(listOut);
  saldoEl.textContent = formatar(saldo);
  saldoEl.style.color = saldo < 0 ? "var(--vermelho)" : "var(--verde)";
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const descricao = campoDesc.value.trim();
  const numero = Number(campoValor.value);

  if (descricao === "" || numero <= 0) return;

  const lista = campoTipo.value === "entrada" ? listIn : listOut;

  const li = document.createElement("li");
  li.dataset.valor = numero;
  li.innerHTML = `
        <button>−</button>
        <span class="desc"></span>
        <span class="valor">${formatar(numero)}</span>
    `;

  li.querySelector(".desc").textContent = descricao;
  lista.append(li);

  campoDesc.value = "";
  campoValor.value = "";
  atualizarSaldo();
});

colunas.addEventListener("click", (ev) => {
  if (!ev.target.closest("button")) return;
  ev.target.closest("li").remove();
  atualizarSaldo();
});
