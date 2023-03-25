const inputValidation = document.querySelector("#validation-input");
const textLength = Number(inputValidation.getAttribute("data-length"));

inputValidation.addEventListener("blur", (ev) => {
    if (ev.currentTarget.value.length === textLength) {
        inputValidation.classList.add("valid");
        inputValidation.classList.remove("invalid");
    }
    else {
        inputValidation.classList.add("invalid");
        inputValidation.classList.remove("valid");
    }
}
);
