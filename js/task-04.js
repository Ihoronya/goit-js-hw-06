const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const value = document.querySelector("#value")


decrement.addEventListener("click", onDecrementClick)
increment.addEventListener("click", onIncrementClick)


let counterValue = 0
function onDecrementClick(event) {
  counterValue -=1
  value.textContent = counterValue
}

function onIncrementClick(event) {
  counterValue +=1
  value.textContent = counterValue
}