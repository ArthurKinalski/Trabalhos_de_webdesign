const bt11 = document.querySelector("main :nth-child(1)")
const bt21 = document.querySelector("main :nth-child(2)")
const bt31 = document.querySelector("main :nth-child(3)")

const bt12 = document.querySelector("main :nth-child(4)")
const bt22 = document.querySelector("main :nth-child(5)")
const bt32 = document.querySelector("main :nth-child(6)")

const bt13 = document.querySelector("main :nth-child(7)")
const bt23 = document.querySelector("main :nth-child(8)")
const bt33 = document.querySelector("main :nth-child(9)")

let turn = 0
const ox = ['O', 'X']

bt11.onclick = function() {
    if (bt11.textContent.trim() != '') {
        return
    }
    bt11.textContent = ox[turn % 2]
    turn++
}