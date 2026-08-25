const bts = document.querySelectorAll("main button")

let turn = 0
const ox = ['O', 'X']

function adicionaClickAosBotoes(bt, index) {
    bt.onclick = function() {
        if (bt.textContent.trim() != '') return
        bt.textContent = ox[turn % 2]
        console.log(index)
        turn++
    }
}

bts.forEach(adicionaClickAosBotoes)

