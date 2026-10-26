let rng = Math.round(Math.random() * 5);
const inp = document.querySelector("#numero");
const btn = document.querySelector("button");
const err = document.querySelector(".erros");
const acer = document.querySelector(".acertos");
let erro = 0;
let acerto = 0;

btn.onclick = function(){
    const val = parseInt(inp.value);
    if (rng == val) {
        acerto++;
        alert("Ganhou, perdeu " + erro + " vezes");
        acer.textContent = "Quantidade de acertos: " + acerto;
        rng = Math.round(Math.random() * 5);
    } else {
        erro++;
        alert("Perdeu");
        err.textContent = "Quantidade de erros: " + erro;
        rng = Math.round(Math.random() * 5);
    }
}