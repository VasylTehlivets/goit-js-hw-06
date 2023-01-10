const form = document.querySelector(".login-form");

const onTargetSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const mailPassword = { email: email.value, password: password.value };
  console.log(mailPassword);
  event.currentTarget.reset();
};

form.addEventListener("submit", onTargetSubmit);
