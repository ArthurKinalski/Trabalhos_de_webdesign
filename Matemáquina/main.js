// const bt1 = document.querySelector(".calc .bt_num_1")
// bt1.onclick = function() {inp.value = inp.value + "1"}

const inp = document.querySelector("input")
const btns = document.querySelectorAll(".calc .bt_num")

btns.forEach(function(bt) { 
    bt.onclick = function() {
        inp.value += bt.textContent
    }
})