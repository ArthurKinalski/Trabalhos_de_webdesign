const bt11 = document.querySelector("main :nth-child(1)")
const bt21 = document.querySelector("main :nth-child(2)")
const bt31 = document.querySelector("main :nth-child(3)")

const bt12 = document.querySelector("main :nth-child(4)")
const bt22 = document.querySelector("main :nth-child(5)")
const bt32 = document.querySelector("main :nth-child(6)")

const bt13 = document.querySelector("main :nth-child(7)")
const bt23 = document.querySelector("main :nth-child(8)")
const bt33 = document.querySelector("main :nth-child(9)")

const allButtons = [bt11, bt21, bt31, bt12, bt22, bt32, bt13, bt23, bt33];

const restartButton = document.getElementById('reset');

let turn = 0
const ox = ['O', 'X']

bt11.onclick = function() {
    if (bt11.textContent.trim() != '') {
        return
    }
    bt11.textContent = ox[turn % 2]
    turn++
}
bt21.onclick = function() {
    if (bt21.textContent.trim() != '') {
        return
    }
    bt21.textContent = ox[turn % 2]
    turn++
}
bt31.onclick = function() {
    if (bt31.textContent.trim() != '') {
        return
    }
    bt31.textContent = ox[turn % 2]
    turn++
}



bt12.onclick = function() {
    if (bt12.textContent.trim() != '') {
        return
    }
    bt12.textContent = ox[turn % 2]
    turn++
}
bt22.onclick = function() {
    if (bt22.textContent.trim() != '') {
        return
    }
    bt22.textContent = ox[turn % 2]
    turn++
}
bt32.onclick = function() {
    if (bt32.textContent.trim() != '') {
        return
    }
    bt32.textContent = ox[turn % 2]
    turn++
}



bt13.onclick = function() {
    if (bt13.textContent.trim() != '') {
        return
    }
    bt13.textContent = ox[turn % 2]
    turn++
}
bt23.onclick = function() {
    if (bt23.textContent.trim() != '') {
        return
    }
    bt23.textContent = ox[turn % 2]
    turn++
}
bt33.onclick = function() {
    if (bt33.textContent.trim() != '') {
        return
    }
    bt33.textContent = ox[turn % 2]
    turn++
}

restartButton.onclick = function() {
    allButtons.forEach(button => {
        button.innerHTML = '&nbsp;';
    });
    turn = 0;
};