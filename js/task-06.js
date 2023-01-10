const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");
const totalLength = parseInt(inputLength, 10);

input.addEventListener("blur", () => {
  if (input.value.length === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  }

  if (input.value.length === totalLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }

  if (input.value.length !== totalLength && input.value.length !== 0) {
    input.classList.add("invalid");
  }
});
