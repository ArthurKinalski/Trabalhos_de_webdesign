new Image().src = "src/goku_ssj1.png";

const bullet = document.querySelector(".bullet");

bullet.onclick = function() {
    bullet.classList.toggle("move-right");
};