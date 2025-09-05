let signupBtn = document.querySelector("#signupBtn");
let signinBtn = document.querySelector("#signinBtn");
let title = document.querySelector("#title");
let nameField = document.querySelector("#nameField");

signinBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
});

signupBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
});
