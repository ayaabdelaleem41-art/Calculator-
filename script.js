
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "C") {
      display.value = "";
    }

  
    else if (buttonText === "DEL") {
      display.value = display.value.slice(0, -1);
    }

    
    else if (buttonText === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }

    else {
      display.value += buttonText;
    }
  });
});