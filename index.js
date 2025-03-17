let count = 0
let countEl = document.getElementById("count-el")
let savedEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    savedEl.textContent += count + " - "
    count = 0
    countEl.innerText = 0
}