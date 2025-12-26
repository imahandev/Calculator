const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "خطا";
      }
    } else {
      display.value += value;
    }
  });
});
