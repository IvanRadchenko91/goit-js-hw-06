const counter = document.querySelector("#counter");
const counterValue = document.querySelector("#value");

let currentValue = 0;

counter.addEventListener("click", (event) => {
  const button = event.target;

  if (button.dataset.action === "decrement") {
    currentValue -= 1;
  } else if (button.dataset.action === "increment") {
    currentValue += 1;
  }

  counterValue.textContent = currentValue;
});
