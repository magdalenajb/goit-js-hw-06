const nameInput = document.querySelector("#name-input");
const inputText = document.querySelector("#name-output");

nameInput.addEventListener(
    "input", (event) => {
        if (nameInput.value !== "") {
            inputText.textContent = event.currentTarget.value;
        }
        else {
            inputText.textContent = "Anonymous";
        }
    }
);

