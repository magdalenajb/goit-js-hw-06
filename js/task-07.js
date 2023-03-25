const rangeInput = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

inputText.style.fontSize = rangeInput.value;
rangeInput.addEventListener("input", (ev) =>
    inputText.style.fontSize = ev.currentTarget.value + "px"
);