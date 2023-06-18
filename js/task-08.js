const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || password.value === "") {
    alert("Всі поля повинні бути заповнені.");
  } else {
    const userForm = {
      email: email.value,
      password: password.value,
    };
    console.log(userForm);
    form.reset();
  }
}