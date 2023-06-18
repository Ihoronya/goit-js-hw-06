const input = document.querySelector("#validation-input");
const inputAtribute = document.querySelector("input[data-length]");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const { value } = event.currentTarget;
    if (value.length === (Number(inputAtribute.dataset.length)))
  {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}