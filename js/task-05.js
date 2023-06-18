const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(event) {
    const  {value} = event.currentTarget
  return value === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = value);
}