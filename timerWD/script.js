const inicio = new Date();
const fah = new Audio("./fah.mp3");
const div = document.querySelector("div.tempo");
const inp = document.querySelector(".inp");
const act = document.querySelector(".act");
const lst = document.querySelector(".lst");

let timers = [];
let timersStart = [];
let cont = 0;

setInterval(() => {
  const agora = new Date();
  const time = Math.round((agora.getTime() - inicio.getTime()) / 1000);
  div.textContent = time;

  if (timers.includes(time)) {
    const index = timers.indexOf(time);

    document.querySelector(`li:nth-child(${index + 1})`)?.remove();
    timers.splice(index, 1);

    fah.play();
  }
}, 500);

act.addEventListener("click", () => {
  timers[cont] = parseInt(inp.value);
  timersStart[cont] = new Date();
  cont++;

  lst.innerHTML += `<li>${inp.value}</li>`;
});
